FROM node:10.16-alpine

RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

RUN mkdir -p /app/tmp

ADD ./bin /app/bin
ADD ./env /app/env
ADD ./lib /app/lib
ADD ./pages /app/pages
ADD ./public /app/public
ADD ./next-env.d.ts /app/next-env.d.ts
ADD ./next.config.js /app/next.config.js
ADD ./package.json /app/package.json
ADD ./server.js /app/server.js
ADD ./yarn.lock /app/yarn.lock
ADD ./tsconfig.json /app/tsconfig.json
RUN chown -R app:app /app

USER app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN yarn install
RUN yarn set-staging

RUN yarn build

EXPOSE 3000/tcp

CMD ["yarn", "start"]
