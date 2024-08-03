import { Product } from '../entities/Product';

export interface IProductRepository {
  findById(id: number): Promise<Product>;
  findByName(name: string): Promise<Product>;
  save(product: Product): Promise<void>;
  indexWithSearchByName: (name?: string) => Promise<Product[]>
}
