import { Router } from "express";
import db_users from '../../db/queries/authors';
import { generateHash } from "../../utils/passwords";

const router = Router();

router.post('/', async (req, res) => {
    const email = req.body;
    const password = req.body;
    try {
        const newUser = await db_users.insert(email, password);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Register error'})
    }
})

export default router;