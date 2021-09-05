import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { newBlog } from '../../types';

const EditBlog = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    const [editBlog, setEditBlog] = useState<newBlog>(null);
    const [title, setEditTitle] = useState<newBlog['title']>(null);
    const [content, setEditContent] = useState<newBlog['content']>(null);

    useEffect(() => {
        fetch(`/api/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setEditBlog(data);
                setEditTitle(data.title);
                setEditContent(data.content);
            })
    }, [id]);

    const editTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.target.value);
    }
    const editContentInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditContent(e.target.value);
    }
    const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch(`/api/blogs/${id}/edit`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
            .then(res => res.json())
            .then(data => {
                history.push(`/blogs/${id}`)
            })
            .catch(err => console.log(err))
    };
    return (
        <>
            <div className="container">
                <h3 className="text-warning text-center col-md-6">Edit Blog</h3>
                <form className="form-group bg-light col-md-6">
                    <div>
                        <label className="text-warning">Username</label>
                        <input type="text" className="form-control" value={title || ''} onChange={editTitleInput} />
                    </div>
                    <div>
                        <label className="text-warning">Message</label>
                        <textarea className="form-control" value={content || ''} onChange={editContentInput} />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-primary m-3" onClick={handleSaveClick}>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditBlog;
