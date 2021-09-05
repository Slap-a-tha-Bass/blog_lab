import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newBlog } from '../../types';
import BlogCard from '../components/BlogCard';

const OneBlog = () => {

    const { id } = useParams<{ id: string }>();
    const [oneBlog, setOneBlog] = useState<newBlog>(null);


    useEffect(() => {
        fetch(`/api/blogs/${id}`)
        .then(res => res.json())
        .then(data => setOneBlog(data))
    }, [id]);

    return (
        <div>
            <BlogCard  {...oneBlog} /> 
        </div>
    )
}

export default OneBlog;
