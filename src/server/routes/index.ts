import * as express from 'express';
import blogsRouter from './blogs';
import authorsRouter from './authors';
import donateRouter from './donate';

const router = express.Router();

router.use('/blogs', blogsRouter);
router.use('/authors', authorsRouter);
router.use('/donate', donateRouter);

export default router;