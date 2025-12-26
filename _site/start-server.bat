@echo off
setlocal
cd /d "%~dp0"

echo ========================================
echo Jekyll Local Server Starter
echo ========================================
echo.

echo Checking dependencies...
call bundle check >nul 2>&1
if %errorlevel% neq 0 (
    echo Dependencies are missing or out of date.
    echo Running bundle install...
    echo.
    call bundle install
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Failed to install dependencies.
        echo Please check your Ruby installation.
        pause
        exit /b %errorlevel%
    )
    echo.
    echo Dependencies installed successfully!
    echo.
)

echo Starting Jekyll server...
echo Server will be available at: http://localhost:4000
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

bundle exec jekyll serve --livereload --host 0.0.0.0

endlocal
pause
