FROM node:8.14-alpine
WORKDIR .
COPY package.json .
COPY package-lock.json .
RUN yarn install

COPY components ./components
COPY config ./config
COPY pages ./pages
COPY static ./static
COPY .babelrc .
COPY .eslintrc .
COPY yarn-error.log .
COPY yarn.lock .

RUN yarn build
EXPOSE 3000
CMD ["yarn","start"]