import { IProductRepository } from '../../repositories/IProductRepository';
import { ICreateProductRequestDTO } from './CreateProductDTO';
import { Product } from '../../entities/Product';
import AppError from '../../utils/AppError';

export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ){}

  async execute(data: ICreateProductRequestDTO): Promise<number>{
    const productAlreadyExists = await this.productRepository.findByName(data.name);

    if(productAlreadyExists){
      throw new AppError('Este produto já existe.');
    }

    const product = new Product(data);

    const productId = await this.productRepository.save(product);

    return productId;
  }
}
