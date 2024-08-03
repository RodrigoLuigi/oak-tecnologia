import { SqliteProductRepository } from '../../repositories/implementations/SqliteProductRepository';
import { ShowProductController } from './ShowProductController';
import { ShowProductUseCase } from './ShowProductUseCase';

const sqliteProductRepository = new SqliteProductRepository();

const showProductUseCase = new ShowProductUseCase(sqliteProductRepository);

const showProductController = new ShowProductController(showProductUseCase);

export { showProductController };
