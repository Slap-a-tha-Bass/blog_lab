import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogCardProps } from '../../types';
import { useHistory } from 'react-router';

const handleEditClick = () => {
    console.log("Edit this please")
}


const BlogCard = (props: BlogCardProps) => {

    const history = useHistory();

    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (confirm("Do you want to delete this chirp?")) {
            fetch(`/api/blogs/${props.id}/delete`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    history.push('/blogs')
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="card col-md-4 my-2 bg-light">
            <div className="card-body">
                <div className="card-header font-weight-bold text-center">
                    {props.title}
                </div>
                <div className="card-text font-weight-light text-center">
                    {props.content}
                </div>
            </div>
            <div className="d-flex justify-content-around my-3">
                {props.isPreview || <Link to={`/blogs/${props.id}/edit`} className="btn btn-warning border rounded">Edit Post</Link>}
                {props.isPreview || <button onClick={handleDeleteClick} className="text-danger border rounded border-danger">X</button>}
                {props.isPreview && <Link  to={`/blogs/${props.id}`}className="btn btn-primary border rounded">View Post</Link>}
            </div>
        </div>
    )
}

export default BlogCard;
