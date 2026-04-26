# 🚀 FullStack FARM - Gerenciamento de Jogadores

Bem-vindo ao **FullStack FARM**, uma aplicação robusta que utiliza o conceito de arquitetura moderna para gerenciamento de dados. Este projeto integra o poder do **Python (FastAPI)**, a flexibilidade do **MongoDB** e a interatividade do **React**.

> **FARM Stack**: **F**astAPI, **A**ndroid/Web (React), **R**eactive UI, **M**ongoDB.

---

## 📋 Conceito do Projeto
A aplicação foi desenhada para ser leve, escalável e fácil de implantar. O backend gerencia a persistência de dados em um banco NoSQL (MongoDB), enquanto o frontend oferece uma interface dinâmica e responsiva para o cadastro e visualização de jogadores em tempo real.

---

## 🛠️ Guia de Instalação (Primeiros Passos)

Ao baixar o projeto, as bibliotecas (músculos) não vêm no pacote. Siga a ordem abaixo para dar vida à aplicação:

### 🐍 Backend (Python + FastAPI)
1. **Ambiente Virtual**: Dentro da pasta `/backend`, crie e ative a venv:
   - Linux: `python3 -m venv .venv && source .venv/bin/activate`
   - Windows: `python -m venv .venv && .venv\Scripts\activate`
2. **Dependências**: Instale as bibliotecas necessárias:
   - `pip install fastapi uvicorn motor pymongo`

### 📦 Banco de Dados (MongoDB)
1. **Instalação**: Instale o **MongoDB Community Server**.
2. **Ferramentas (Opcional)**: 
   - **MongoDB Compass**: Interface visual para ver seus dados.
   - **MongoSH**: Terminal interativo para comandos rápidos.
3. **Diretório de Dados**: Certifique-se de que a pasta `./data` existe na raiz do projeto para logs e travas.

### ⚛️ Frontend (React)
1. **Node.js**: Certifique-se de ter o Node.js instalado.
2. **Dependências**: Dentro da pasta `/frontend`, instale os pacotes:
   - `npm install`

---

## 🚀 Como Rodar a Aplicação

### 🐧 No Linux (Script Automatizado)
Abra o terminal na raiz do projeto e execute:
```bash
chmod +x start_linux.sh
./start_linux.sh
🪟 No Windows (Script Automatizado)
Basta dar um duplo clique no arquivo:
start_windows.bat

🔄 Tutorial de Operação Diária (Restart)
Se precisar reiniciar partes específicas via terminal ou VS Code:

1. Reiniciando o Banco (MongoDB)
Se o banco travar, use estes comandos no terminal:

Parar: sudo systemctl stop mongod

Iniciar: sudo systemctl start mongod

Status: sudo systemctl status mongod (Verifique se está verde/Active).

2. Reiniciando o Backend (FastAPI)
No terminal, dentro da pasta /backend (com venv ativa):

Bash
uvicorn api:app --host 0.0.0.0 --port 8000 --reload
Acesse: http://localhost:8000/docs para ver a documentação automática.

3. Reiniciando o Frontend (React)
No terminal, dentro da pasta /frontend:

Bash
npm start
Acesse: http://localhost:3000

🛡️ Dica de Ouro: O Arquivo .lock
Se o banco de dados não subir, verifique se existe um arquivo chamado mongod.lock dentro da pasta de dados. Se existir, delete-o e tente iniciar novamente. Isso acontece quando o PC é desligado bruscamente.

Desenvolvido por Milton Carlos Ribeiro - 2026 🚀
