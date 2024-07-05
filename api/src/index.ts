import { Request, Response } from 'express';
import migrationsRun from './database/sqlite/migrations';
import express from 'express';
import routes from './routes';

migrationsRun();

const app = express();

app.use(express.json());
app.use(routes);

app.use('/', (req: Request, res: Response) => {
  res.send('Server is running 🚀');
});

try {
  const PORT = 3333;

  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT} 🚀`)
  );
} catch (error) {
  console.error('Erro ao iniciar o servidor:', error);
}
