FROM node:9

WORKDIR /starter
ENV NODE_ENV development

COPY package.json /starter/package.json

RUN npm install 
RUN npm i -g truffle 

COPY . /starter

COPY .env.example .env

CMD ["npm","start"]

EXPOSE 8081
