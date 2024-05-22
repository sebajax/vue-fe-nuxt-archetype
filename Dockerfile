FROM node:16.8.0-alpine AS base

WORKDIR /app

COPY . ./
COPY envgonsul /app

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install
RUN npm run build

CMD [ "./envgonsul","npm", "run", "start" ]

EXPOSE 8080
