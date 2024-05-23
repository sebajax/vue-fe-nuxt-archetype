FROM node:18-alpine AS base

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 8080
