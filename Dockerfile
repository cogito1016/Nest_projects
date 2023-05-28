FROM node:19-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./auth-server/* ./
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run:dev" ] 