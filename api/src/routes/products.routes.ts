import { Request, Response, Router } from 'express';
import { createProductController } from '../useCases/CreateProduct';
import { indexProductsController } from '../useCases/IndexProducts';
import { showProductController } from '../useCases/showProduct';



const productsRoutes = Router();

productsRoutes.post('/', createProductController.handle.bind(createProductController));

productsRoutes.get('/', indexProductsController.handle.bind(indexProductsController));

productsRoutes.get('/:id', showProductController.handle.bind(showProductController));

productsRoutes.put('/:id', (req: Request, res: Response) => {
  res.send('Atualizar produto');
});

productsRoutes.delete('/:id', (req: Request, res: Response) => {
  res.send('Deletar produto');
});

export default productsRoutes;


