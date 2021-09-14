import { Router } from "express";
import { authenticate } from 'passport';
import jwt from 'jsonwebtoken';
import { jwtConfig } from "../../config";
import { ReqUser } from "../../../types";

const router = Router();

router.post('/', authenticate('local'), async (req: ReqUser, res) => {
    try {
        const token = jwt.sign({ userid: req.user.id, email: req.user.email, role: 1 },
            jwtConfig.secret,
            { expiresIn: jwtConfig.expires }
        );
        res.json(token);
        return;
    } catch (error) {
        res.status(500).json({ message: 'Login error' })
    }
})

export default router;