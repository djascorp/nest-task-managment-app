FROM node:current-alpine

COPY . .

RUN npm install
RUN npx prisma generate
RUN npx prisma migrate dev
RUN npm run build


CMD [ "npm", "start" ]