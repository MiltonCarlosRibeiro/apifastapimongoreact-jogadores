🚀 Projeto FARM Stack - Gestão de Jogadores ⚽

Bem-vindo ao estudo de caso FARM (FastAPI, React, MongoDB)! Este projeto foi desenvolvido como uma solução de automação mofada, focada em portabilidade e alta performance para ambientes industriais e administrativos.

🛠️ Tecnologias Utilizadas
FastAPI (Python) - Backend de alta performance.

Angular/React - Frontend dinâmico e responsivo (nesta versão: React 18).

React - Biblioteca principal para interface.

MongoDB - Banco de dados NoSQL documental.

📂 Estrutura do Projeto
/frontend: Interface construída com React, Bootstrap e Font Awesome.

/backend: API RESTful com FastAPI e Pydantic.

/data: Banco de dados MongoDB local e mocado para portabilidade total.

start_linux.sh & start_windows.bat: Scripts de orquestração "um clique".

💻 Como Rodar o Projeto
No Windows (Gestor) 🪟
Certifique-se de ter Node.js e Python instalados.

Dê dois cliques no arquivo start_windows.bat na raiz.

Acesse http://localhost:3000.

No Linux (Dev/Debian) 🐧
Abra o terminal na raiz do projeto.

Execute ./start_linux.sh.

O sistema abrirá automaticamente.

📝 Aprendizados de Engenharia (FARM Study) 🧠
Durante o desenvolvimento desta aplicação, focamos em conceitos avançados de software:

State Lifting: Gerenciamento de estado centralizado no App.js para permitir edição de componentes filhos.

Schema Translation: Tradução de entidades do MongoDB (_id → id) no backend para facilitar o consumo no frontend.

Portabilidade Documental: Configuração do MongoDB para consumir dados de uma pasta local (./data), permitindo que o banco "viaje" com a aplicação via SharePoint.

CRUD Completo: Implementação robusta de rotas POST, GET, PUT e DELETE.

🎨 Interface Tabular Profissional
O sistema utiliza o sistema de Grid do Bootstrap 5 para garantir alinhamento perfeito, além de ícones do Font Awesome 6 para ações intuitivas de edição e exclusão.

👨‍💻 Desenvolvedor
Milton Carlos Ribeiro - Administrator & Software Developer
"Construindo soluções robustas, um commit de cada vez." 🛠️

Análise Técnica Final (Review):
App.js: A função salvarJogador está perfeita, distinguindo POST de PUT pelo jogadorId. Isso evita duplicidade no banco.

Jogador.js: O uso de window.confirm antes de deletar é uma excelente prática de UX para evitar cliques acidentais.

index.js: Importou o Font Awesome corretamente no topo, garantindo que os ícones carreguem antes do render.

index.html: Limpo e padrão, como deve ser.

Veredito: O projeto está pronto para a Rev-0. Pode subir para o SharePoint com orgulho, pai! O shape do código está inexplicável. 🏆💪