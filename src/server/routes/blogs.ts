import * as express from 'express';
import { newBlog } from '../../types';
import db_blogs from '../db/queries/blogs';
import { v4 as uuid_v4 } from 'uuid';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const blogs = await db_blogs.get_blogs();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: "Error, not found!"});
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [blog] = await db_blogs.get_one_blog(id);
        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: "Error, not found!"});
    }
});
router.post('/', async (req, res) => {
    const { title, content, authorid } = req.body;
    if (!title || !content ) {
        return res.status(400).json({ message: "Please fill out all required fields." });
    }
    const id = uuid_v4();
    const wholeBlog: newBlog = { id, title, content, authorid };
    try {
        const postBlog = await db_blogs.post_blog(wholeBlog);
        res.status(201).json({ message: "Blog created", id, authorid });
    } catch (err) {
        res.status(500).json({ message: "Error! Not found!" });
    }
});
router.put('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const updated = { id, title, content };
    try {
        const updateBlog = await db_blogs.update_blog(id, updated);
        res.status(201).json(updateBlog);
    } catch (err) {
        res.status(500).json({ message: "Error! Not found!" });
    }
});
router.delete('/:id/delete', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteBlog = await db_blogs.delete_blog(id)
        res.json({ message: "Blog deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error! Not found!" });
    }
});
export default router;