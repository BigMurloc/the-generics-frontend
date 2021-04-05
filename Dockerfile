# stage 1
FROM node:15.10.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/the-generics-angular/ /usr/share/nginx/html/
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
