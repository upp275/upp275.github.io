import os
from PIL import Image, ImageDraw, ImageFilter
import math

def create_blinking_stars_gif():
    # Paths
    base_dir = os.getcwd()
    input_path = os.path.join(base_dir, 'assets', 'images', 'website_background_globe.png')
    output_path = os.path.join(base_dir, 'assets', 'images', 'website_background_globe.gif')

    print(f"Loading image from {input_path}")
    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    original_img = Image.open(input_path).convert("RGBA")
    width, height = original_img.size
    print(f"Image dimensions: {width}x{height}")

    # ----- Tweakable parameters (edit these to change appearance) -----
    # Number of frames (choose 20-40 for smoothness)
    NUM_FRAMES = 40
    # Total loop duration in milliseconds (5000ms = 5s)
    LOOP_DURATION_MS = 2500

    # Base radius for the glow (pixels)
    STAR_BASE_RADIUS = 70
    # Variation multiplier applied with intensity (0.0 - 1.0)
    STAR_RADIUS_VARIATION = 0.5
    # Minimum alpha used for inner core (0-255)
    STAR_MIN_ALPHA = 120
    # Flare length multiplier relative to outer radius (smaller -> shorter rays)
    FLARE_SCALE = 1.0
    # Width of flare lines in pixels
    FLARE_WIDTH = 2
    # Inner bright core radius
    INNER_RADIUS = 10
    
    # Bright-point detection tuning
    BLUR_RADIUS_FOR_DETECTION = 2
    MIN_DISTANCE_BETWEEN_STARS = 60
    MIN_BRIGHTNESS_THRESHOLD = 200
    # Colors for GIF palette (choose 128-256)
    GIF_PALETTE_COLORS = 256
    # ------------------------------------------------------------------

    # Detect the brightest spots in the image and use top-3 as star positions.
    def find_brightest_points(img, n=3, min_distance=MIN_DISTANCE_BETWEEN_STARS, blur_radius=BLUR_RADIUS_FOR_DETECTION):
        """Return list of up to n (x,y) coordinates corresponding to the brightest
        pixels in the (RGBA) image."""
        gray = img.convert('L')
        if blur_radius and blur_radius > 0:
            gray = gray.filter(ImageFilter.GaussianBlur(blur_radius))

        w, h = gray.size
        vals = list(gray.getdata())  # row-major

        # Sort indices by brightness descending
        idxs = sorted(range(len(vals)), key=lambda i: vals[i], reverse=True)

        picks = []
        for idx in idxs:
            if len(picks) >= n:
                break
            x = idx % w
            y = idx // w
            # skip very dark
            if vals[idx] < MIN_BRIGHTNESS_THRESHOLD:
                break
            too_close = False
            for px, py in picks:
                if (x - px) ** 2 + (y - py) ** 2 < min_distance ** 2:
                    too_close = True
                    break
            if not too_close:
                picks.append((x, y))

        # Fallback if none found
        if not picks:
            # Maybe just pick the center if nothing else works
            picks = [(w // 2, h // 2)]
            
        return picks

    # Detect positions
    final_stars = find_brightest_points(original_img, n=3)
    print(f"Detected brightest star positions: {final_stars}")

    # Create frames
    frames = []
    
    for i in range(NUM_FRAMES):
        # Create a new frame by copying original
        # We work in RGBA for better compositing
        frame_layer = original_img.copy()
        
        # Sine wave for blink
        # Normalize i to 0-1 then apply 2pi for a full cycle
        phase = (i / NUM_FRAMES) * 2 * math.pi
        
        # Add glow at each star position
        for sx, sy in final_stars:
            # Different phases for each star to make it look organic
            # sx/50.0 is just a simple way to offset phase based on position
            star_phase = phase + (sx / 50.0)
            star_intensity = (math.sin(star_phase) + 1) / 2  # 0.0 to 1.0
            
            # Create a separate layer for the glow to enable alpha composition
            glow_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
            glow_draw = ImageDraw.Draw(glow_layer)
            
            # Opacity of the star core and halo
            max_alpha = int(STAR_MIN_ALPHA + (255 - STAR_MIN_ALPHA) * star_intensity)
            
            # 1. Outer HALO (fuzzy circle)
            r_outer = STAR_BASE_RADIUS * (0.6 + STAR_RADIUS_VARIATION * star_intensity)
            for r in range(int(r_outer), 1, -3):
                # Faster dropoff for a "hot" core look
                alpha = int(max_alpha * (1 - r/r_outer)**2)
                color = (200, 230, 255, alpha) # Soft blueish white
                glow_draw.ellipse([sx-r, sy-r, sx+r, sy+r], fill=color)
            
            # 2. Star Cross Flares
            flare_len = r_outer * FLARE_SCALE
            flare_color = (255, 255, 255, int(max_alpha * 0.9))
            
            # Horizontal / Vertical lines
            glow_draw.line([(sx - flare_len, sy), (sx + flare_len, sy)], fill=flare_color, width=FLARE_WIDTH)
            glow_draw.line([(sx, sy - flare_len), (sx, sy + flare_len)], fill=flare_color, width=FLARE_WIDTH)
            
            # Diagonal lines (slightly shorter and thinner)
            diag_len = flare_len * 0.6
            diag_width = max(1, FLARE_WIDTH - 1)
            glow_draw.line([(sx - diag_len, sy - diag_len), (sx + diag_len, sy + diag_len)], fill=flare_color, width=diag_width)
            glow_draw.line([(sx - diag_len, sy + diag_len), (sx + diag_len, sy - diag_len)], fill=flare_color, width=diag_width)
            
            # 3. Bright Inner Core
            inner_r = INNER_RADIUS
            glow_draw.ellipse([sx-inner_r, sy-inner_r, sx+inner_r, sy+inner_r], fill=(255, 255, 255, max_alpha))

            # Composite the glow layer onto the frame
            frame_layer = Image.alpha_composite(frame_layer, glow_layer)
        
        # Convert to RGB (quantize needs RGB)
        # GIF doesn't support alpha well, so we should flatten it.
        # Use a solid background if the original image has transparency.
        final_frame = Image.new("RGB", (width, height), (0, 0, 0)) # Default black bg
        final_frame.paste(frame_layer, (0, 0), frame_layer)
        
        # Quantize to reduce colors for GIF format
        quantized = final_frame.quantize(colors=GIF_PALETTE_COLORS, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG)
        frames.append(quantized)

    print(f"Generating GIF from {len(frames)} frames...")
    
    # Calculate duration per frame
    frame_duration = max(20, int(LOOP_DURATION_MS / NUM_FRAMES))

    # Save GIF
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        optimize=True,
        duration=frame_duration,
        loop=0
    )
    print(f"Successfully saved GIF to {output_path}")

if __name__ == "__main__":
    create_blinking_stars_gif()
