import 'reflect-metadata';
import {useExpressServer} from 'routing-controllers';
import { Request, Response } from 'express';
import path from 'path';
import Server from './server/server';
import test from './features/test/test.router';

const server = Server.init(3000);

useExpressServer(server, {
  routePrefix: '/api',
  controllers: [`${__dirname}/controllers/*Controller.ts`]
});

server.app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(`${__dirname}/public`));
});

server.app.use(test);

server.start(() => {
  console.log(`Running in port: ${3000}`);
});