FROM node:10.16-alpine

RUN addgroup -g 1500 -S app && adduser -S -G app -u 1500 app

WORKDIR /app

RUN chown -R app:app /app

USER app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV development

EXPOSE 3000/tcp

CMD yarn install && yarn dev
