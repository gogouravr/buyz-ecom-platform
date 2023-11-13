import express, { Request, Response } from 'express';

import { productManager } from '../managers';
import { Product } from '../../models';

const product = express.Router();

product.post('/product', async (req: Request, res: Response) => {
    try {
        const retData = await productManager.addProduct(req.body as Product);
        res.json(retData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: 400, msg: 'Bad request body' });
    }
});

export const productRouter = product;
