Write-Host "Installing Node.js dependencies for Darkom website..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Cyan
    Write-Host ""
} catch {
    Write-Host "Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    Write-Host "Download from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to continue"
    exit 1
}

Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Dependencies installed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "To start the development server, run:" -ForegroundColor Cyan
    Write-Host "npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "To build for production, run:" -ForegroundColor Cyan
    Write-Host "npm run build" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Failed to install dependencies. Please check the error messages above." -ForegroundColor Red
    Write-Host ""
}

Read-Host "Press Enter to continue"
