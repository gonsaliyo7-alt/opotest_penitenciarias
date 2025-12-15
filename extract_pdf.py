import sys
import re

# Read PDF as binary and try to extract text patterns
pdf_path = sys.argv[1]

with open(pdf_path, 'rb') as f:
    content = f.read()

# Convert to string (latin-1 encoding works better for PDFs)
text = content.decode('latin-1', errors='ignore')

# Extract text between BT (Begin Text) and ET (End Text) markers
# This is a basic PDF text extraction
text_blocks = re.findall(r'BT(.*?)ET', text, re.DOTALL)

extracted = []
for block in text_blocks:
    # Look for text in parentheses (Tj operator) or brackets (TJ operator)
    texts = re.findall(r'\((.*?)\)', block)
    texts += re.findall(r'\[(.*?)\]', block)
    extracted.extend(texts)

# Clean and print
output = ' '.join(extracted)
# Remove escape sequences
output = output.replace('\\(', '(').replace('\\)', ')').replace('\\\\', '\\')

print(output[:50000])  # First 50000 characters
