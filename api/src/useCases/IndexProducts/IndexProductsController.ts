import  { Request, Response } from 'express';
import  { IndexProductsUseCase } from './IndexProductsUseCase';

export class IndexProductsController {
  constructor(
    private indexProductsUseCase: IndexProductsUseCase
  ){}
  async handle(request: Request, response: Response): Promise<Response>{
    const { name } = request.query;

    const nameString = typeof name === 'string' ? name : undefined;

    try {
      const products = await this.indexProductsUseCase.execute(nameString);
      return response.status(200).json(products);
    }
    catch (error: any) {
      return response.status(400).json({ message: error.message || 'Unexpected error.' });
    }
  }
}

