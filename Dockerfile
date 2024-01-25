FROM node:20 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm run db:migrate

EXPOSE 5000:5000

CMD ["npm", "start"]