import { ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';

export class Authentication implements ExpressMiddlewareInterface {

  use(req: Request, res: Response, next: NextFunction): any {
    console.log("do something...");
    next();
  }
}