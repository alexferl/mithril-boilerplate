ARG NODE_VERSION=18.12.1-alpine3.16
ARG NGINX_VERSION=1.23.2-alpine
FROM node:${NODE_VERSION} as builder

WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:${NGINX_VERSION}
COPY --from=builder /build/dist /usr/share/nginx/html/

USER root

RUN mkdir -p /var/cache/nginx
RUN chown -R nginx:nginx /var/cache/nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY etc/nginx/nginx.conf /etc/nginx/
COPY etc/nginx/example.com.conf /etc/nginx/conf.d/
RUN mkdir -p /etc/nginx/headers.d
COPY etc/nginx/headers.conf /etc/nginx/headers.d/

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
