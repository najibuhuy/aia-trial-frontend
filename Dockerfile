
FROM node:14

WORKDIR /app

ARG DEBIAN_FRONTEND=noninteractive

ENV TZ=Asia/Jakarta

RUN apt-get install -y tzdata

ENV GENERATE_SOURCEMAP false

RUN NODE_OPTIONS="--max-old-space-size=8192"

COPY package*.json ./ 

RUN yarn install 

COPY . .

EXPOSE 5002

CMD yarn start