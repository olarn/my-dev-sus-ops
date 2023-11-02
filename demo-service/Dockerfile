FROM node:20

WORKDIR /app
COPY package.json package.json
RUN yarn
COPY . .
CMD [ "node", "server.js" ]