import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { newBlog } from '../../types';

const handleDeleteClick = () => {
    console.log("Deleted")
}
const handleEditClick = () => {
    console.log("Edit this please")
}
const BlogCard = (props: newBlog) => {

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
                {props.isPreview || <button onClick={handleDeleteClick} className="text-danger border rounded border-danger">X</button>}
                {props.isPreview && <button onClick={handleEditClick} className="btn btn-warning border rounded">Edit Post</button>}
                {props.isPreview && <Link  to={`/blogs/${props.id}`}className="btn btn-primary border rounded">View Post</Link>}
            </div>
        </div>
    )
}

export default BlogCard;
