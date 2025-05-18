#!/bin/bash
echo "Building Easywind CSS..."

# Step 1: Generate CSS using JavaScript
echo "Generating repetitive CSS..."
node src/generate.js

# Step 2: Concatenate everything into one CSS
cat src/variables.css > dist/easywind.css
cat src/easywind.css >> dist/easywind.css
cat generated/generated.css >> dist/easywind.css

# Step 3: Minify
npx postcss dist/easywind.css --use cssnano -o dist/easywind.min.css

echo "Build complete! Files are in the 'dist' folder."
