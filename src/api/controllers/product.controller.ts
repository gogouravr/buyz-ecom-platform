import { Request } from 'express';
import { JsonController, Req, Post, BadRequestError } from 'routing-controllers';

import { ProductManager } from '../managers';
import { Product } from '../../models';

// const product = express.Router();

// product.post('/product', async (req: Request, res: Response) => {
//     try {
//         const retData = await productManager.addProduct(req.body as Product);
//         res.json(retData);
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({ status: 400, msg: 'Bad request body' });
//     }
// });

// export const productRouter = product;

@JsonController('/product')
export class ProductController {

    private productManager: ProductManager; // Replace with your actual import

    constructor() {
        this.productManager = new ProductManager(); // Initialize your product manager here
    }

    @Post('/')
    async addProduct(@Req() request: Request): Promise<Product | null> {
        try {
            const productData: Product = request.body;
            const retData = await this.productManager.addProduct(productData);
            return retData?.get();
        } catch (error) {
            console.log(error);
            throw new BadRequestError('Bad Request Body');
        }
    }
}