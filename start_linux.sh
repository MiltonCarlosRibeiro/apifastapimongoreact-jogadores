#!/bin/bash
echo "🚀 Iniciando Limpeza de Ambiente..."
sudo systemctl stop mongod
sudo pkill -9 mongod
sudo pkill -9 uvicorn

echo "📦 Iniciando MongoDB Local..."
# Remove o lock antigo se existir para evitar erro 48
rm -f ./data/mongod.lock
mongod --dbpath ./data --logpath ./data/mongo.log --fork

echo "⏳ Aguardando 5 segundos para o banco estabilizar..."
sleep 5

echo "🧠 Iniciando Backend FastAPI..."
cd backend
source .venv/bin/activate
# O '&' no final faz ele rodar em background e liberar o script para o próximo passo
uvicorn api:app --reload &

echo "🎨 Iniciando Frontend React..."
cd ../frontend
npm start
