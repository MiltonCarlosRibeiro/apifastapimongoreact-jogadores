from pymongo import MongoClient

# Definimos a conexão explícita para o localhost. 
# Isso garante que a API sempre ache o banco que o seu script start_linux/windows subiu.
conexao = MongoClient("mongodb://127.0.0.1:27017/")