# Install dependencies only when needed
FROM node:16.13.0 AS deps

WORKDIR /src/app
COPY package*.json ./
COPY tsconfig.json ./

# RUN npm install
RUN npm install -g node-gyp
RUN yarn install --frozen-lockfile
RUN yarn install

# Build next app, it should be /build
FROM node:16-alpine as build
WORKDIR /src/app
COPY package*.json ./
COPY tsconfig.json ./
COPY . .
COPY --from=deps src/app/node_modules ./node_modules
EXPOSE 3000
ENV NODE_ENV development
ENV APP_ENDPOINT http://128.199.226.83:3000
ENV NEXT_BACKEND_ENDPOINT http://127.0.0.1:8000
RUN yarn build

# Creating nginx image and copy build folder from above
FROM nginx:1.16.0-alpine
COPY --from=build src/app/.next /usr/share/nginx/html
COPY --from=build src/app/out /usr/share/nginx/html
COPY --from=build src/app/package*.json /usr/share/nginx/html
COPY --from=build src/app/public /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
