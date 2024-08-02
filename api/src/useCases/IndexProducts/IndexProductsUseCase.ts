import type { Product } from '../../entities/Product';
import type { IProductRepository } from '../../repositories/IProductRepository';

export class IndexProductsUseCase {
  constructor(
    private productRepository: IProductRepository
  ){}

  async execute(name?: string): Promise<Product[]>{
    const products = await this.productRepository.indexWithSearchByName(name);

    return products;

  }
}
