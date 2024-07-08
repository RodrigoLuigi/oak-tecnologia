import knex from '../../database/knex';
import { Product } from '../../entities/Product';
import { IProductRepository } from '../IProductRepository';

export class SqliteProductRepository implements IProductRepository {
  async findByName(name: string): Promise<Product> {
    const product = await knex('product').where({ name }).first();

    return product;
  }

  async save(product: Product): Promise<void> {
    await knex('product').insert(product);
  }
}
