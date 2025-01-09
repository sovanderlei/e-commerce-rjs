# Usa a imagem base do Node.js
FROM node:16-alpine

WORKDIR /app

# Copia os arquivos do frontend
COPY package*.json ./
RUN npm install
COPY . .

# Expõe a porta 3000
EXPOSE 3080

CMD ["npm", "start"]
