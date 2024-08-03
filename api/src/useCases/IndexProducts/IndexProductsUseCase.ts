import type { IProductRepository } from '../../repositories/IProductRepository';
import type { IIndexProductsRequestDTO } from './IndexProductsDTO';

export class IndexProductsUseCase {
  constructor(
    private productRepository: IProductRepository
  ){}

  async execute(name?: string): Promise<IIndexProductsRequestDTO[]>{
    const products = await this.productRepository.indexWithSearchByName(name);

    return products;

  }
}
