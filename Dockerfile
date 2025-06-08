FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY src src
COPY .env .env
RUN npm run build --silent
CMD ["npm", "run", "start"]