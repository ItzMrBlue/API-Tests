FROM node:alpine

COPY package.json ./

COPY server.js ./

RUN npm install

#the command below is what appends when you run the container
CMD ["node", "server.js"]