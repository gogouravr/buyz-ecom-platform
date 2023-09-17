import express, { Request, Response } from 'express';
import { healthRouter } from './api/controllers/health.controller';

const app = express();
const port = 3000;

const v1_BASE_PATH = '/api/v1';

app.use(v1_BASE_PATH, healthRouter);  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
