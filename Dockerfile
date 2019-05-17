FROM node:10 

WORKDIR /app 
COPY . . 

EXPOSE 5000

RUN npm install 

