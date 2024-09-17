import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import catRoutes from './routes/catRoutes';

createConnection()
  .then(() => {
    const app = express();
    const PORT = 4000;

    app.use(bodyParser.json());

    app.use('/', catRoutes);

    app.listen(PORT, () => {
      console.log(`API запущен на http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log('Ошибка подключения к базе данных:', error));
