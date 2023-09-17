import express, { Request, Response, Router } from 'express';
const router = express.Router();

router.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'OK!' });
})

export const healthRouter = router;