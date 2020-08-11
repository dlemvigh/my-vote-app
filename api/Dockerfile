FROM node:12 as build
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

FROM node:12-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/build ./

CMD ["node", "index.js"]