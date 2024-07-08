import { Request, Response, Router } from 'express';
import { createProductController } from '../useCases/CreateProduct';

const productsRoutes = Router();

productsRoutes.post('/', createProductController.handle.bind(createProductController));

productsRoutes.get('/', (req: Request, res: Response) => {
  res.send('Listar produtos');
});

productsRoutes.get('/:id', (req: Request, res: Response) => {
  res.send('Listar produto pelo id');
});

productsRoutes.put('/:id', (req: Request, res: Response) => {
  res.send('Atualizar produto');
});

productsRoutes.delete('/:id', (req: Request, res: Response) => {
  res.send('Deletar produto');
});

export default productsRoutes;


