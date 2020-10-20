FROM node:10.16-alpine

RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

ADD ../../__test__ /app/__test__
ADD ../../components /app/components
ADD ../../pages /app/pages
ADD ../../public /app/public
ADD ../../styles /app/styles
ADD ../../babel.config.json /app/babel.config.json
ADD ../../jest.config.js /app/jest.config.js
ADD ../../jest.tsconfig.json /app/jest.tsconfig.json
ADD ../../next-env.d.ts /app/next-env.d.ts
ADD ../../next.config.js /app/next.config.js
ADD ../../package.json /app/package.json
ADD ../../postcss.config.js /app/postcss.config.js
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
