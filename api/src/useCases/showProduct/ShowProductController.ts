import  { Request, Response } from 'express';
import  { ShowProductUseCase } from './ShowProductUseCase';

export class ShowProductController {
  constructor(
    private showProductUseCase: ShowProductUseCase
  ){}
  async handle(request: Request, response: Response): Promise<Response>{
    const  productId  = request.params;

    try {
      const product = await this.showProductUseCase.execute(Number(productId.id));

      return response.status(200).json(product);
    }
    catch (error: any) {
      return response.status(400).json({ message: error.message || 'Unexpected error.' });
    }
  }
}

