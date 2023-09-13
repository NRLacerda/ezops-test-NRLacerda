Tecnologias usadas:
1- Backend: Node, Express, Socket.io
2- Devops: Github Actions, AWS EC2, Docker

Step-by-Step setup

SERVER

1- baixa  o repositorio
2- tenha NODE instalado
3- no repositorio executa um "npm install"
4- e depois disso "node server.js" pra rodar o backend
5- a aplicação via estar disponível em localhost:8080



Para o primeiro building

1- docker build . -t ezopsimg
2- docker run -d -p 49160:8080 --name ezopsconteiner ezopsimg

GitHub Actions Config

1- Github>Repositorio>Settings>Actions>Runners> crie um novo self-hosted runner
2- Siga as configurações de instalação recomendadas pelo próprio GitHub
3- Após finalizar está tudo ok, as configs sobre o resto está tudo configurado no arquivo yaml do GHActions
