FROM node:10.15.1-jessie-slim

ENV NODE_ENV=production

COPY . /var/www/app
WORKDIR /var/www/app

RUN yarn run build

CMD [ "node", "dist/index.js" ]
