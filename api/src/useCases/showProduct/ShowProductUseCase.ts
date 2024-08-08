import type { IProductRepository } from '../../repositories/IProductRepository';
import AppError from '../../utils/AppError';
import type { IShowProductRequestDTO } from './ShowProductDTO';

export class ShowProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ){}

  async execute(id: number): Promise<IShowProductRequestDTO>{
    const product = await this.productRepository.findById(id);

    if(!product){
      throw new AppError('Produto não encontrado');
    }

    return product;
  }
}
