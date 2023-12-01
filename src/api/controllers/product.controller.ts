/** @format */

import express, { Request, Response } from 'express';

import { productManager } from '../managers';
import { Product } from '../../models';

const product = express.Router();

product.post('/product', async (req: Request, res: Response) => {
  try {
    const retData = await productManager.addProduct(req.body as Product);
    return res.json(retData);
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 400, msg: 'Bad request body' });
  }
});

product.get('/product/all', async (req: Request, res: Response) => {
  try {
    const products = await productManager.getAllProducts();
    return res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 400, msg: 'Something went wrong' });
  }
});

export const productRouter = product;
