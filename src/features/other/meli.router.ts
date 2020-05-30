import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ ok: true });
});

router.get('/:id', (req: Request, res: Response) => {
  const id: string = req.params.id;
  res.json({ id, ok: true });
});

export default router;