import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

// import database config
import database from './database';

//import routers
import { healthRouter, productRouter } from './api/controllers';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// middleware to parse incoming JSON payloads.
app.use(express.json());

// Load Swagger YAML file
const swaggerFilePath = path.join(__dirname, '../src/api', 'swagger.yaml');
const swaggerDocument = yaml.load(swaggerFilePath);
// Serve swagger doc
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Routes
const v1_BASE_PATH = '/api/v1';
app.use(v1_BASE_PATH, healthRouter);
app.use(v1_BASE_PATH, productRouter);

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
