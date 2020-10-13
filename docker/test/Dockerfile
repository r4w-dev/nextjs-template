FROM node:10.16-alpine

RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

ADD ../../components /app/components
ADD ../../pages /app/pages
ADD ../../public /app/public
ADD ../../styles /app/styles
ADD ../../next-env.d.ts /app/next-env.d.ts
ADD ../../next.config.js /app/next.config.js
ADD ../../package.json /app/package.json
ADD ../../tsconfig.json /app/tsconfig.json
ADD ../../yarn.lock /app/yarn.lock
RUN chown -R app:app /app

USER app

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn install
RUN yarn build

ENV NODE_ENV production

RUN yarn autoclean --force

EXPOSE 3000/tcp

CMD yarn "${CMD:test}"
