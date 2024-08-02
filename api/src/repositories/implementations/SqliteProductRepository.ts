import knex from '../../database/knex';
import { Product } from '../../entities/Product';
import { IProductRepository } from '../IProductRepository';

export class SqliteProductRepository implements IProductRepository {
  async findByName(name: string): Promise<Product> {
    const product = await knex('products').where({ name }).first();
    return product;
  }

  async save(product: Product): Promise<void> {
    await knex('products').insert(product);
  }

  async indexWithSearchByName(name?: string){
    const products = await knex('products').whereLike('name', `%${name}%`).orderBy('id');
    return products;
  }
}
