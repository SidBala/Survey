FROM node

RUN mkdir -p /var/www

WORKDIR /var/www

COPY package.json /var/www

RUN npm install

ADD . /var/www

EXPOSE 3000

CMD [ "npm", "start" ]