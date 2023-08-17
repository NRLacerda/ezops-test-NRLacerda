Tecnologias usadas:
1- Backend: Node, Express, Socket.io
2- Devops: Github Actions, AWS EC2, Docker

Step-by-Step setup

Para o primeiro building

1- docker build . -t ezopsimg
2- docker run -d -p 49160:8080 --name ezopsconteiner ezopsimg

GitHub Actions Config

1- Github>Repositorio>Settings>Actions>Runners> crie um novo self-hosted runner
2- Siga as configurações de instalação recomendadas pelo próprio GitHub
3- Após finalizar está tudo ok, as configs sobre o resto está tudo configurado no arquivo yaml do GHActions
