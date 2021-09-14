import { Router } from 'express';
import { ReqUser } from '../../../types';
import { authenticate } from 'passport';

const router = Router();

router.get('/', authenticate('jwt'), (req: ReqUser, res) => {
    try {
        res.json({ message: `Welcome, ${req.user.email}!` })
    } catch (error) {
        res.status(500).json({ message: "Server error where token is at users.ts" })
    }

})

export default router;