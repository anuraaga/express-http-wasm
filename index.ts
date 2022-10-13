import express, { ErrorRequestHandler } from 'express';

import httpwasm from './httpwasm.js';

const app = express();
const port = 3000;

const wasmMw = await httpwasm({
  wasmPath: '../http-wasm-host-go/internal/test/testdata/examples/auth.wasm',
});

app.use(wasmMw);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
