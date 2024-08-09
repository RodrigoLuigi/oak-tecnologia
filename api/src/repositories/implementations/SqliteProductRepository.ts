import knex from '../../database/knex';
import { Product } from '../../entities/Product';
import { IProductRepository } from '../IProductRepository';

export class SqliteProductRepository implements IProductRepository {
  async findById(id: number): Promise<Product> {
    const product = await knex('products').where({ id }).first();
    return product;
  }

  async findByName(name: string): Promise<Product> {
    const product = await knex('products').where({ name }).first();
    return product;
  }

  async save(product: Product): Promise<number> {
    const id = await knex('products').insert(product);
    return id[0];
  }

  async indexWithSearchByName(name?: string){
    const products = await knex('products').whereLike('name', `%${name}%`).orderBy('id');
    return products;
  }
}
