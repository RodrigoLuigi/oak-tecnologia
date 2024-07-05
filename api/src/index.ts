import express from 'express';

const app = express();

app.use(express.json());

const PORT = 3333;

try {
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT} 🚀`)
  );
} catch (error) {
  console.error('Erro ao iniciar o servidor:', error);
}

