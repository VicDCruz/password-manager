FROM node:10.16.0

COPY ./web /web
WORKDIR /web
RUN rm -rf ./node_modules

ENV PATH ./node_modules/.bin:$PATH

RUN apt update
RUN apt install -y mongodb

RUN npm install sails -g
RUN npm install
RUN npm install lodash --save

RUN npm install sails-mongo --save
RUN npm install nodemon -g

RUN mongo --version

EXPOSE 1337

# CMD [ "nodemon", "-w", "api", "-w", "config" ]
# CMD [ "nodemon", "app.js" ]
CMD [ "npm", "run", "dev" ]
