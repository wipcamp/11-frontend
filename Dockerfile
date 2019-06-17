FROM node:12.4.0
WORKDIR /APP
COPY package.json /APP 
RUN yarn
COPY . /APP
RUN yarn build

