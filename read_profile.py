import pypdf
import sys
import os

def read_pdf(file_path=r'C:\Users\Utkarsh\Documents\INVESTMENTS\Github_Portfolio\Profile.pdf'):
    if not os.path.exists(file_path):
        print(f"Error: File '{file_path}' not found.")
        return

    try:
        reader = pypdf.PdfReader(file_path)
        text = ""
        for i, page in enumerate(reader.pages):
            content = page.extract_text()
            if content:
                text += content + "\n"
            else:
                print(f"Warning: Could not extract text from page {i+1}.")
        print(text)

        output_path = os.path.splitext(file_path)[0] + ".txt"
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Saved extracted text to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        read_pdf(sys.argv[1])
    else:
        print("Please provide a file path.")
