## Getting Started

NextJs + TypeScript + Jest + Enzyme

### Yarn
First, install dependencies:

```bash
yarn install
```

Next, run the development server:

```bash
yarn dev
```

### Docker
```
cd docker/dev && docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Running Tests

### Yarn

```
yarn test
```

### Docker

```
docker exec -u app -it nextjs-app yarn test
```
