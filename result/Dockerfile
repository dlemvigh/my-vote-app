FROM node:12 as build
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

FROM node:12-alpine as runtime
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/public public/

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
