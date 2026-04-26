@echo off
title FARM Stack - Gestão de Jogadores
echo =====================================================
echo    🚀 INICIANDO AMBIENTE (REV-0) - CODE-TI
echo =====================================================

:: 1. Limpeza de processos antigos (O pkill do Windows)
echo [1/4] Finalizando instâncias anteriores...
taskkill /f /im mongod.exe >nul 2>&1
taskkill /f /im python.exe >nul 2>&1

:: 2. Iniciar MongoDB Local
echo [2/4] Iniciando Banco de Dados...
:: Remove o lock se o banco caiu errado da última vez
if exist ".\data\mongod.lock" del /q ".\data\mongod.lock"
start "FARM_DB" /min mongod --dbpath .\data

:: 3. Aguardar o banco estabilizar
echo [3/4] Aguardando estabilização (5s)...
timeout /t 5 /nobreak >nul

:: 4. Iniciar Backend (FastAPI)
echo [4/4] Iniciando API Backend...
cd backend
:: Usamos call para ativar a venv corretamente no Windows
if exist ".venv\Scripts\activate.bat" (
    start "FARM_BACKEND" /min cmd /k "call .venv\Scripts\activate.bat && uvicorn api.py:app --reload"
) else (
    echo [ERRO] Pasta .venv não encontrada em /backend!
    pause
    exit
)

:: 5. Iniciar Frontend (React)
echo 🎨 Abrindo Interface no Navegador...
cd ..\frontend
npm start

pause
