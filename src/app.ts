import { Request, Response } from 'express';
import path from 'path';
import Server from './server/server';
import test from './features/test/test.router';


// const port: number = process.env.PORT;

const server = Server.init(3000);

server.app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(`${__dirname}/public`));
});

server.app.use(test);

server.start(() => {
  console.log(`Running in port: ${3000}`);
});