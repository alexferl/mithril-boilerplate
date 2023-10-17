# mithril-boilerplate

[Mithril.js](https://mithril.js.org/) boilerplate with [Vite](https://vitejs.dev/) and [Biome](https://biomejs.dev/).

# Using

## Setup
```shell
npm install
```

## Running in dev
```shell
npm run dev
```

## Lint
```shell
npm run lint
```

## Format
```shell
npm run format
```

## Building for prod
```shell
npm run build
```

## Running in prod preview
```shell
npm run preview
```

# Docker

## Build
```shell
docker build -t mithril-boilerplate .
```

## Run
```shell
docker run --name mithril-boilerplate -p 8080:8080 --rm mithril-boilerplate
```
