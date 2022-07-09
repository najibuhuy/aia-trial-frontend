FROM node:14

WORKDIR /app

ARG DEBIAN_FRONTEND=noninteractive

ENV TZ=Asia/Jakarta

RUN apt-get install -y tzdata

COPY package*.json ./ 

RUN yarn install 

COPY . .

EXPOSE 3000

CMD yarn start


