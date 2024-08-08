import  { Request, Response } from 'express';
import  { IndexProductsUseCase } from './IndexProductsUseCase';

export class IndexProductsController {
  constructor(
    private indexProductsUseCase: IndexProductsUseCase
  ){}
  async handle(request: Request, response: Response): Promise<Response>{
    const { name } = request.query as {name?: string};

    const products = await this.indexProductsUseCase.execute(name);

    return response.json(products);
  }
}

