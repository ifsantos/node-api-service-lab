FROM node:lts-alpine as runner
ENV NODE_ENV=production
ARG COMMIT_ID
ENV COMMIT_ID=${COMMIT_ID}
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "src/index.js"]



#-------------------

#FROM node:lts as runner
#WORKDIR /node-express
#ENV NODE_ENV production
#ARG COMMIT_ID
#ENV COMMIT_ID=${COMMIT_ID}
#COPY . .
#RUN npm ci --only=production
#EXPOSE 3000
#CMD ["node", "app.js"]
