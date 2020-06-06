/* eslint-disable class-methods-use-this */
import { ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';

export default class Authentication implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction): any {
    // eslint-disable-next-line no-console
    console.log('middleware authentication...');
    next();
  }
}
