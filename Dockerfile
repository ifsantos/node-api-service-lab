FROM node:lts-alpine as runner
ENV NODE_ENV=production
ARG COMMIT_ID
ENV COMMIT_ID=${COMMIT_ID}
WORKDIR /node-api-service-lab
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /node-api-service-lab
USER node
CMD ["npm", "start"]



#-------------------

#docker run -p 3000:3000 ghcr.io/ifsantos/node-api-service-lab:prod
# docker build . -t ghcr.io/ifsantos/node-api-service-lab:prod

#FROM node:lts as runner
#WORKDIR /node-express
#ENV NODE_ENV production
#ARG COMMIT_ID
#ENV COMMIT_ID=${COMMIT_ID}
#COPY . .
#RUN npm ci --only=production
#EXPOSE 3000
#CMD ["node", "app.js"]
