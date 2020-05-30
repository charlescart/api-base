import { Router, Request, Response, NextFunction } from 'express';
import testController from './test.controller';

const router = Router();

router.post('/v1/test/algorithm', async (req: Request, res: Response, next: NextFunction) => {
  await testController.algorithm(req)
    .then((response: number) => {
      // standarResponse({ res, req, response })
      return response;
    })
    .catch((e: Error) => next(e));
});

export default router;