import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';
import AppError from '../../utils/AppError';
import type { ICreateProductRequestDTO } from './CreateProductDTO';

export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase
  ){}
  async handle(request: Request, response: Response): Promise<Response>{
    const { name, description, price, available = true }: ICreateProductRequestDTO = request.body;

    if(!name || !description || !price){
      throw new AppError('Preencha todos os campos necessários para cadastrar um novo produto.');
    }

    const productId = await this.createProductUseCase.execute({
      name,
      description,
      price,
      available,
    });

    return response.status(201).json({id: productId, message: 'Produto cadastrado com sucesso!' });
  }
}
