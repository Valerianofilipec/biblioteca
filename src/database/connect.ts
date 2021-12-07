import { Client, Pool } from "pg";

const createConnection = async () => {
    /*
    const pool = new Pool({
        user: 'valeriano',
        host: 'localhost',
        database: 'biblioteca',
        password: '',
        port: 5432,
      });
    */

      const client = new Pool({
        user: 'valeriano',
        host: 'localhost',
        database: 'biblioteca',
        password: '',
        port: 5432,
      });

      await client.connect();
      return client;
}

export { createConnection };