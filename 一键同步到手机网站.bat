@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo Syncing AI Card Knowledge Base to mobile website...
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0sync-to-mobile-site.ps1"
echo.
if errorlevel 1 (
  echo Sync failed. Please send the error above to Codex.
) else (
  echo Sync finished.
)
echo.
pause
