FROM node:latest 

WORKDIR /chat-express

COPY package*.json /

RUN npm install 

COPY . /

EXPOSE 5000

CMD ["npm", "run", "start"]