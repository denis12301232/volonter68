FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY . .
COPY tsconfig.json .
# COPY public public

RUN bun run build

ENV NODE_ENV production
CMD ["bun", ".output/server/index.mjs"]

EXPOSE 3000