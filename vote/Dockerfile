FROM node:12 as build
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY src/ src/
COPY public/ public/
COPY tsconfig.json .

RUN npm test -- --watchAll=false
RUN npm run build

FROM node:12-alpine as runtime
WORKDIR /app

RUN npm i -g serve
COPY --from=build /app/build/ build/

CMD ["serve", "-s", "build"]