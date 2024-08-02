import { SqliteProductRepository } from '../../repositories/implementations/SqliteProductRepository';
import { IndexProductsController } from './IndexProductsController';
import { IndexProductsUseCase } from './IndexProductsUseCase';

const sqliteProductRepository = new SqliteProductRepository();

const indexProductUseCase = new IndexProductsUseCase(sqliteProductRepository);

const indexProductsController = new IndexProductsController(indexProductUseCase);

export { indexProductsController };
