import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

import { healthRouter } from './api/controllers/health.controller';
import database from './database';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const v1_BASE_PATH = '/api/v1';
app.use(v1_BASE_PATH, healthRouter);

// Load Swagger YAML file
const swaggerFilePath = path.join(__dirname, '../src/api', 'swagger.yaml');
const swaggerDocument = yaml.load(swaggerFilePath);
// Serve swagger doc
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));



app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);

  //connect to the database
  try {
    await database.authenticate();
    console.log('Service connected to the databse');
  } catch (error) {
    console.error('Connection to the database failed with error ' + error);
  }
});
