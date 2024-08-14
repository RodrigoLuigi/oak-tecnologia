import path from 'path';
import { Knex } from 'knex';
import { Database } from 'sqlite3';

const config: {[key: string]: Knex.Config} = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.db'),
    },
    pool: {
      afterCreate: (conn: Database, cb: (err: Error | null) => void) => {
        conn.run('PRAGMA foreign_keys = ON', cb);
      },
    },
    migrations: {
      directory: path.resolve(__dirname, 'src',
        'database',
        'knex',
        'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'seeds'),
    },
    useNullAsDefault: true,
  },
};

export default config;


