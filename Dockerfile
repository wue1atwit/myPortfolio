# build phrase
FROM --platform=linux/amd64 node:16.13.2-alpine as build
ARG BACKEND_URI
ENV BACKEND_URI=$BACKEND_URI
WORKDIR /app 
COPY . .
RUN npm i && npm run build

# config nginx
FROM --platform=linux/amd64 nginx:alpine
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
# users are not allowed to listen on priviliged ports
RUN sed -i.bak 's/listen\(.*\)80;/listen 8000;/' /etc/nginx/conf.d/default.conf
EXPOSE 8000
# fix routing 404
RUN sed -i.bak '/index\(.*\)index.html\(.*\)index.htm;/atry_files $uri /index.html;' /etc/nginx/conf.d/default.conf
# comment user directive as master process is run as user in OpenShift anyhow
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf
RUN addgroup nginx root
USER nginx
COPY --from=build /app/build /usr/share/nginx/html