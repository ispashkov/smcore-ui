FROM node:14-alpine as build
WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY . /app
RUN yarn install --production
RUN yarn build

FROM nginx:1.21.6-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
