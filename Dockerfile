FROM node:10 

WORKDIR /app 
COPY . . 

EXPOSE 80

RUN npm install 

