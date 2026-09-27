@echo off
title CodeQuiz
cd /d "%~dp0"

echo.
echo  CodeQuiz - Starting server...
echo  Browser will open at http://localhost:3000
echo  Keep this window open while using the app.
echo  Press Ctrl+C to stop the server.
echo.

start "" "http://localhost:3000"
npm start

if errorlevel 1 (
    echo.
    echo  Failed to start. Run "npm install" once, then try again.
    pause
)
