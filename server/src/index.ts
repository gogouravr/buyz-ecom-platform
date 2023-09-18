import express from 'express';
import dotenv from 'dotenv';
import { healthRouter } from './api/controllers/health.controller';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const v1_BASE_PATH = '/api/v1';

app.use(v1_BASE_PATH, healthRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
