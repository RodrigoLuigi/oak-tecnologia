import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';
import AppError from '../../utils/AppError';

export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase
  ){}
  async handle(request: Request, response: Response): Promise<Response>{
    const { name, description, price, available = true } = request.body;

    if(!name || !description || !price){
      throw new AppError('Preencha todos os campos necessários para cadastrar um novo produto.');
    }

    try {
      await this.createProductUseCase.execute({
        name,
        description,
        price,
        available,
      });

      return response.status(201).json({ message: 'Produto cadastrado com sucesso!' });
    } catch (error: any) {
      return response.status(400).json({ message: error.message || 'Unexpected error.' });
    }
  }
}
