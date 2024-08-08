import  { Request, Response } from 'express';
import  { ShowProductUseCase } from './ShowProductUseCase';

export class ShowProductController {
  constructor(
    private showProductUseCase: ShowProductUseCase
  ){}
  async handle(request: Request, response: Response): Promise<Response>{
    const  productId  = request.params;

    const product = await this.showProductUseCase.execute(Number(productId.id));

    return response.json(product);
  }
}

