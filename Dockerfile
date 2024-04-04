FROM node:20.12.1-alpine as builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY src ./src
COPY public ./public
COPY tsconfig.json tailwind.config.ts postcss.config.js next.config.mjs package.json package-lock.json .prettierrc.json .eslintrc.json ./

# Note - this cannot be run with NODE_ENV of production as it will not install dev dependencies
RUN npm ci
RUN npm run build

FROM node:20.12.1-alpine as runner
ENV NODE_ENV production
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

WORKDIR /app
CMD ["node", "server.js"]
