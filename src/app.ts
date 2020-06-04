import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import express from 'express';

const app = express();
const port = 3000 || process.env.PORT;
// const routePrefix = process.env.ROUTE_PREFIX || '/api';

// app.use(routePrefix, express.static(`${__dirname}/public`));

useExpressServer(app, {
  routePrefix: '/api',
  cors: true,
  controllers: [`${__dirname}/features/**/*Controller.ts`]
});

app.listen(port, function () {
  console.log(`Run in the port ${port}`);
})
