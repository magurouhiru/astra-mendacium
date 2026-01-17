ARG BUN_IMAGE_TAGS=1.3.6-slim
FROM oven/bun:${BUN_IMAGE_TAGS}

RUN apt-get update && apt-get install -y git \
    && mkdir -p /app/node_modules
