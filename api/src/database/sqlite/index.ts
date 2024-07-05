import { open, Database } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';

async function sqliteConnection(): Promise<Database<sqlite3.Database, sqlite3.Statement>> {
  try {
    const database = await open({
      filename: path.resolve(__dirname, '..', 'database.db'),
      driver: sqlite3.Database,
    });

    console.log('Database connection established.');
    return database;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

export default sqliteConnection;
