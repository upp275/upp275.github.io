import os
from PIL import Image, ImageDraw, ImageFilter
import math

def create_blinking_stars_gif_optimized():
    # Paths
    base_dir = os.getcwd()
    input_path = os.path.join(base_dir, 'assets', 'images', 'website_background_globe.png')
    output_path = os.path.join(base_dir, 'assets', 'images', 'website_background_globe_optimized.gif')

    print(f"Loading image from {input_path}")
    if not os.path.exists(input_path):
        print(f"Error: Input file not found.")
        return

    original_img = Image.open(input_path).convert("RGBA")
    
    # --- WEB OPTIMIZATION SETTINGS ---
    # Reducing resolution is the #1 way to save size. 800px is still quite sharp.
    MAX_WIDTH = 800 
    if original_img.width > MAX_WIDTH:
        ratio = MAX_WIDTH / float(original_img.width)
        new_height = int(float(original_img.height) * ratio)
        original_img = original_img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
        print(f"Resized image to {MAX_WIDTH}x{new_height} for web optimization.")

    width, height = original_img.size
    
    # Reduced frames (25-30 is a good middle ground for smoothness vs size)
    NUM_FRAMES = 25
    LOOP_DURATION_MS = 3000 # 3 seconds loop

    # Adjusted parameters for the smaller resolution
    STAR_BASE_RADIUS = 60 
    STAR_RADIUS_VARIATION = 0.5
    STAR_MIN_ALPHA = 100
    FLARE_SCALE = 1.0
    FLARE_WIDTH = 2
    INNER_RADIUS = 6
    
    # Detection
    MIN_BRIGHTNESS_THRESHOLD = 200
    # Reducing colors saves space. 128 is usually enough for a background.
    GIF_PALETTE_COLORS = 128 
    # ----------------------------------

    def find_brightest_points(img, n=3):
        gray = img.convert('L')
        gray = gray.filter(ImageFilter.GaussianBlur(2))
        w, h = gray.size
        vals = list(gray.getdata())
        idxs = sorted(range(len(vals)), key=lambda i: vals[i], reverse=True)
        picks = []
        for idx in idxs:
            if len(picks) >= n or vals[idx] < MIN_BRIGHTNESS_THRESHOLD: break
            x, y = idx % w, idx // w
            # Ensure distance between stars to avoid overlapping clusters
            if all((x-px)**2 + (y-py)**2 > 60**2 for px, py in picks):
                picks.append((x, y))
        return picks if picks else [(w//2, h//2)]

    final_stars = find_brightest_points(original_img, n=3)
    print(f"Star positions detected at: {final_stars}")

    frames = []
    for i in range(NUM_FRAMES):
        frame_layer = original_img.copy()
        phase = (i / NUM_FRAMES) * 2 * math.pi
        
        for sx, sy in final_stars:
            # Shift phase per star for more organic look
            star_phase = phase + (sx / 50.0)
            star_intensity = (math.sin(star_phase) + 1) / 2
            
            glow_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
            glow_draw = ImageDraw.Draw(glow_layer)
            max_alpha = int(STAR_MIN_ALPHA + (255 - STAR_MIN_ALPHA) * star_intensity)
            
            # Glow Halo
            r_outer = STAR_BASE_RADIUS * (0.6 + STAR_RADIUS_VARIATION * star_intensity)
            for r in range(int(r_outer), 1, -4):
                alpha = int(max_alpha * (1 - r/r_outer)**2)
                glow_draw.ellipse([sx-r, sy-r, sx+r, sy+r], fill=(200, 230, 255, alpha))
            
            # Cross Flares
            flare_len = r_outer * FLARE_SCALE
            flare_color = (255, 255, 255, int(max_alpha * 0.8))
            glow_draw.line([(sx-flare_len, sy), (sx+flare_len, sy)], fill=flare_color, width=FLARE_WIDTH)
            glow_draw.line([(sx, sy-flare_len), (sx, sy+flare_len)], fill=flare_color, width=FLARE_WIDTH)
            
            # Center Core
            glow_draw.ellipse([sx-INNER_RADIUS, sy-INNER_RADIUS, sx+INNER_RADIUS, sy+INNER_RADIUS], fill=(255, 255, 255, max_alpha))
            
            # Merge glow layer
            frame_layer = Image.alpha_composite(frame_layer, glow_layer)
        
        # Flatten to RGB
        final_frame = Image.new("RGB", (width, height), (0, 0, 0))
        final_frame.paste(frame_layer, (0, 0), frame_layer)
        
        # Quantize with dithering to preserve gradient quality with fewer colors
        frames.append(final_frame.quantize(colors=GIF_PALETTE_COLORS, method=Image.Resampling.NEAREST, dither=Image.FLOYDSTEINBERG))

    print(f"Generating optimized GIF ({NUM_FRAMES} frames)...")
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        optimize=True, # PIL internal GIF optimization
        duration=int(LOOP_DURATION_MS / NUM_FRAMES),
        loop=0
    )
    
    file_size = os.path.getsize(output_path) / (1024 * 1024)
    print(f"Success! Saved to {output_path}")
    print(f"Final File Size: {file_size:.2f} MB")

if __name__ == "__main__":
    create_blinking_stars_gif_optimized()
