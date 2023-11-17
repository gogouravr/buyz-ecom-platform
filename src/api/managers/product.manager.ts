import { Product } from '../../models';

export class ProductManager {
    /**
     * Method to add product to the DB
     * @param productData - Product data
     * @returns Inserted product record
     */
    async addProduct(productData: any): Promise<Product | null> {
        return await Product.create(productData, { raw: true });
    }

    /**
     * Method to get all products
     * @returns all products
     * TODO - Paginate the API
     */
    async getProducts(): Promise<Product[] | null> {
        return await Product.findAll();
    }
}




