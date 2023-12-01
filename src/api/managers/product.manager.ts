/** @format */

import { Product } from '../../models';

class ProductManager {
  /**
   * Method to add product to the DB
   * @param - productData  Product data
   * @returns Inserted product record
   */
  async addProduct(productData: any): Promise<Product | null> {
    return await Product.create(productData);
  }

  /**
   * Method to return all of the products
   * @returns all products
   * @todo Paginate the API
   */
  async getAllProducts(): Promise<Product[] | null> {
    return await Product.findAll();
  }
}

export const productManager = new ProductManager();
