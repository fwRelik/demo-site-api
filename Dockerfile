FROM node:17-alpine
WORKDIR /opt/app

COPY . .

RUN npm install

RUN npm run build
RUN npm prune --production

CMD ["npm", "run", "start:prod"]