import { SqliteProductRepository } from '../../repositories/implementations/SqliteProductRepository';
import { CreateProductController } from './CreateProductController';
import { CreateProductUseCase } from './CreateProductUseCase';

const sqliteProductRepository = new SqliteProductRepository();

const createProductUseCase = new CreateProductUseCase(sqliteProductRepository);

const createProductController = new CreateProductController(createProductUseCase);

export { createProductController };
