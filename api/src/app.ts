import 'express-async-errors';
import { NextFunction, Request, Response } from 'express';
import express from 'express';
import AppError from './utils/AppError';
import routes from './routes';

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

export { app };

