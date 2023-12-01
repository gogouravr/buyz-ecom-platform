/** @format */

import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv';

import * as models from './models';

dotenv.config();

const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT } =
  process.env;

const sequelizeOptions: SequelizeOptions = {
  database: DATABASE_NAME,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT), // Replace with your PostgreSQL port if necessary
  models: Object.values(models),
  define: {
    timestamps: false // Disable timestamps for all models
  },
  dialect: 'postgres', // Specify the database dialect
  logging: true // Set to true to enable logging
};

export default new Sequelize(sequelizeOptions);
