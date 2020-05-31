import 'reflect-metadata';
import {useExpressServer} from 'routing-controllers';
import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import test from './features/test/test.router';

const app = express();
const port = 3000 || process.env.PORT;

useExpressServer(app, {
  routePrefix: '/api',
  controllers: [`${__dirname}/controllers/*Controller.ts`]
});

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(`${__dirname}/public`));
});

app.use(test);

app.listen(port, function () {
  console.log(`Run in the port ${port}`);
})