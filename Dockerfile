# Install the project dependencies
FROM node:20.11.1-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./

#
RUN npm ci
FROM node:20.11.1-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Use the official Node.js 20.11.1 image as the base image
FROM node:20.11.1-alpine AS runner
# Set working directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=prod
COPY --from=builder /app/dist ./dist

# Run the NestJS application
CMD [ "node","dist/main" ]