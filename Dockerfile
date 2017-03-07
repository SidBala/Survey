FROM node

RUN mkdir -p /var/www

WORKDIR /var/www

COPY package.json /var/www

RUN npm install

ADD . /var/www

ENV PORT 80

EXPOSE 80

CMD [ "npm", "start" ]