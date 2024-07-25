FROM node:22 AS builder
RUN corepack enable

ADD . /app

WORKDIR /app

RUN yes | pnpm install -P

RUN pnpm build

FROM node:22

COPY --from=builder --chown=1000:1000 /app/.output /app

WORKDIR /app

ENTRYPOINT ["node", "server/index.mjs"]
