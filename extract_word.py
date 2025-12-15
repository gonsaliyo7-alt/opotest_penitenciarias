from docx import Document
import sys

# Read the Word document
doc_path = sys.argv[1]
doc = Document(doc_path)

# Extract all text
full_text = []
for para in doc.paragraphs:
    if para.text.strip():
        full_text.append(para.text)

# Print first 1000 paragraphs
output = '\n'.join(full_text[:1000])
print(output)
