@echo off
echo Building Easywind CSS...
echo.

:: Step 1: Generate CSS using JavaScript
echo Generating repetitive CSS...
node src\js\generate.js
if %errorlevel% neq 0 (
    echo Failed to generate CSS.
    exit /b 1
)

:: Step 2: Create dist folder if it doesn't exist
if not exist dist (
    mkdir dist
)

:: Step 3: Concatenate CSS files
echo Concatenating CSS files...
type src\variables.css > dist\easywind.css
type src\easywind.css >> dist\easywind.css
type generated\generated.css >> dist\easywind.css

:: Step 4: Minify CSS
:: echo Minifying CSS...
:: npx.cmd postcss dist/easywind.css --use cssnano -o dist/easywind.min.css
:: npx postcss-cli dist/easywind.css --use cssnano -o dist/easywind.min.css
:: if %errorlevel% neq 0 (
::     echo Minification failed.
::     exit /b 1
:: )

:: Step 5: Complete
echo.
echo Build complete! Files are in the "dist" folder.
exit /b 0
