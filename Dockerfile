FROM node:16.13.1 as builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM node:16.13.1
RUN npm install -g serve
RUN apt update && apt install xsel
WORKDIR /app
COPY --from=builder /app/dist ./
EXPOSE 3000
CMD npx serve -l 3000 -s /app