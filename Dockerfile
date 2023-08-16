# Aqui ele utiliza essa imagem como referência, que já vem com NPM e Node instalados.
FROM node:18

# Isso seta o diretorio como o abaixo, lembrando 
# que usr e outros caminhos são relativose a máquina que está executando
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
# Se vc estiver num ambiente de produção o recomendado é o abaixo por ser mais veloz
# RUN npm ci --omit=dev

# Isso "empacota" a api
COPY . .

# Executa a sua aplicacao dockerizada na porta 8080
EXPOSE 8080

# Seta o comando que vai rodar o app, no caso "node server.js"
CMD [ "node", "server.js" ]

#O arquivo dockerignore funciona igual o gitIgnore