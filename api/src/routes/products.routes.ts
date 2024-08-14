import { Request, Response, Router } from 'express';
import { createProductController } from '../useCases/CreateProduct';
import { indexProductsController } from '../useCases/IndexProducts';
import { showProductController } from '../useCases/showProduct';



const productsRoutes = Router();

// Create Product
productsRoutes.post('/', createProductController.handle.bind(createProductController));
// Index Products
productsRoutes.get('/', indexProductsController.handle.bind(indexProductsController));
// Show Product
productsRoutes.get('/:id', showProductController.handle.bind(showProductController));

productsRoutes.put('/:id', (req: Request, res: Response) => {
  // Implementação futura para atualizar produto
  res.send('Atualizar produto');
});

productsRoutes.delete('/:id', (req: Request, res: Response) => {
  // Implementação futura para deletar produto
  res.send('Deletar produto');
});

export default productsRoutes;


