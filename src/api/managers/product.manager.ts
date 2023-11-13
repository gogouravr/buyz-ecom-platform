import { Product } from '../../models';

class ProductManager {
    /**
     * Method to add product to the DB
     * @param productData - Product data
     * @returns Inserted product record
     */
    async addProduct(productData: any): Promise<Product | null> {
        return await Product.create(productData);
    }
}

export const productManager = new ProductManager();



