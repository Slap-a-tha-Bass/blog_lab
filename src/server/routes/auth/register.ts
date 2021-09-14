import { Router } from "express";


const router = Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        
    } catch (error) {
        res.status(500).json({ message: 'Register error'})
    }
})

export default router;