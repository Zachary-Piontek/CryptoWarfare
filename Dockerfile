FROM node:18-alpine
COPY . /app
RUN npm ci 
RUN npm run build
WORKDIR /app/
CMD node dist/index.js