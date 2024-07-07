import { app } from './app';
import migrationsRun from './database/sqlite/migrations';

migrationsRun();

const PORT = 3333;

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT} 🚀`)
);
