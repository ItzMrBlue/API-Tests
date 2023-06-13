FROM node:alpine

COPY package.json ./

RUN npm install

#the command below is what appends when you run the container
CMD ["node", "server.js"]