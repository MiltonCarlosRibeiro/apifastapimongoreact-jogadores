from fastapi import FastAPI  # O 'API' tem que ser todo maiúsculo
from routes.jogador import jogador_router
from fastapi.middleware.cors import CORSMiddleware ##metodo de acesso para font end

#****************************************
#metodo de acesso para font end
cliente_app =[
    "http://localhost:3000"
#****************************************
]
app = FastAPI()

app.include_router(jogador_router)

#****************************************
#metodo de acesso para font end
app.add_middleware(
    CORSMiddleware,
    allow_origins=cliente_app,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
#****************************************