@echo off
where node.exe >nul 2>&1 && node Runner.js || echo Node.js is not installed! 

