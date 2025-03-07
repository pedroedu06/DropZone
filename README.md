# DropZone
DropZone é uma aplicação de upload de arquivos simples, onde os usuários podem enviar arquivos para o servidor. A aplicação foi construída com Node.js e utiliza o Express para o servidor, enquanto o Multer é usado para manipular os uploads de arquivos.

# 🛠️ Tecnologias Utilizadas
- Node.js: Plataforma para construção do servidor.
- Express: Framework para criação de APIs e servidores.
- Multer: Middleware para gerenciamento de uploads de arquivos.
- HTML5: Para a criação do formulário de upload no frontend.
  
# 📦 Requisitos
Antes de rodar o projeto, tenha as seguintes ferramentas instaladas:

- Node.js - Versão 14.x ou superior.
- NPM ou Yarn - Gerenciadores de pacotes.
  
# 🚀 Como Rodar o Projeto
1. Clone o Repositório
Primeiro, clone o repositório para sua máquina local:

- ``git clone https://github.com/pedroedu06/DropZone.git``
- `cd DropZone`
  
2. Instale as Dependências
Execute o seguinte comando para instalar as dependências do projeto:

- `npm install`
  
ou, se estiver usando Yarn:

- `yarn install`

3. Inicie o Servidor
Após instalar as dependências, inicie o servidor com o seguinte comando:

- `npm start`
 
ou, se estiver usando Yarn:

- `yarn start`

O servidor estará rodando em http://localhost:3000.

4. Teste o Upload de Arquivos
- Abra o arquivo index.html no seu navegador ou acesse a URL do servidor e use o formulário para enviar um arquivo.

# 📂 Estrutura do Projeto

DropZone/
- node_modules/        # Dependências do projeto
- public/              # Arquivos públicos (ex: HTML, CSS)
└── index.html       # Formulário de upload
- uploads/             # Diretório para armazenar os arquivos enviados
- server.js            # Código do servidor Express
- package.json         # Dependências e scripts do projeto
- README.md            # Este arquivo

# 🔐 Segurança
- Validação de Arquivos: O projeto não inclui validação de tipo e tamanho de arquivo, por isso é importante implementar uma verificação para garantir que apenas tipos de arquivos esperados sejam aceitos.
- Proteção contra ataques: Considere adicionar middleware de segurança (ex. helmet, cors) para proteger seu servidor.

# 🌍 Deploy
- Este projeto pode ser facilmente hospedado em plataformas como Heroku, Vercel ou DigitalOcean. Para mais detalhes sobre como fazer o deploy, consulte a documentação de cada plataforma.

# 🛠️ Funcionalidades Futuras
- Adicionar validação de tipo de arquivo e tamanho.
- Armazenamento dos arquivos em um serviço de nuvem, como AWS S3 ou Google Cloud Storage.
- Melhorias no frontend, como drag and drop para upload de arquivos.

# 📝 Licença
- Este projeto é licenciado sob a MIT License.
