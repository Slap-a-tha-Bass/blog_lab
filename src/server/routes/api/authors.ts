import express from 'express';
import db_authors from '../../db/queries/authors';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const authors = await db_authors.get_authors();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ message: "Error, not found!"});
    }
})

export default router;
