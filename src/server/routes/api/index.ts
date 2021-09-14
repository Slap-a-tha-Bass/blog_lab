import { Router } from "express";
import authorRouter from './authors';
import blogsRouter from './blogs';
import contactRouter from './contact';
import donateRouter from './donate';
import usersRouter from './users';

const router = Router();

router.use('/authors', authorRouter);
router.use('/blogs', blogsRouter);
router.use('/contact', contactRouter);
router.use('/donate', donateRouter);
router.use('/users', usersRouter);

export default router;