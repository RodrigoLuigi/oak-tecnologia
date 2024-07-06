import 'express-async-errors';
import express from 'express';
import { NextFunction, Request, Response } from 'express';
import migrationsRun from './database/sqlite/migrations';
import AppError from './utils/AppError';
import routes from './routes';

migrationsRun();

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: AppError, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

const PORT = 3333;

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT} 🚀`)
);
