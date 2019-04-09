FROM node:10.8.0-alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

CMD [ "npm", "start" ]