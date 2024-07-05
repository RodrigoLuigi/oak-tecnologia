import sqliteConnection from '../index';
import createProduct from './createProduct';

async function migrationsRun() {
  const schemas = [createProduct].join('');

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}

export default migrationsRun;
