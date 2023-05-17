FROM node:16.13.1 as builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM node:16.13.1
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./
WORKDIR ../
EXPOSE 80
CMD npx serve -l 80 -s app