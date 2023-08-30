import express from 'express';
import Database from './db.js';
import router from './src/routes/router.js';

async function main() {
  try {
    const db = new Database();
    await db.connect();

    const app = express();
    app.use(express.json());

    app.use('/tasks', router);

    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });

    await db.disconnect();
  } catch (error) {
    console.error('Erro inesperado:', error);
  }
}

main();
