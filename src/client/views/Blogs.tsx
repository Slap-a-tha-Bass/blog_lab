import React, { useEffect, useState } from 'react';
import { newBlog } from '../../types';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState<newBlog[]>([]);
    useEffect(() => {
        fetch(`/api/blogs`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);
    return (
        <div>
            {blogs.map((blog) => (
                <BlogCard {...blog} key={blog.id} isPreview />
            ))}
        </div>
    )
}

export default Blogs;
