@echo off
echo Installing Node.js dependencies for Darkom website...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js first.
    echo Download from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

echo Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo.
    echo Dependencies installed successfully!
    echo.
    echo To start the development server, run:
    echo npm run dev
    echo.
    echo To build for production, run:
    echo npm run build
    echo.
) else (
    echo.
    echo Failed to install dependencies. Please check the error messages above.
    echo.
)

pause
