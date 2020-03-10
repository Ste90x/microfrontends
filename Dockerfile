FROM node

WORKDIR /microfrontends

COPY package-lock.json ./

RUN npm install

COPY . .
