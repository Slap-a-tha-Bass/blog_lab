import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Authors, newBlog } from '../../types';



const Home = () => {

    const history = useHistory();

    const [title, setTitle] = useState<newBlog['title']>(null);
    const [content, setContent] = useState<newBlog['content']>(null);
    const [authors, setAuthors] = useState<Authors[]>([]);
    const [authorid, setAuthorId] = useState<newBlog['authorid']>('');

    const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleContentInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAuthorId(e.target.value);
    }
    const handleLukeSelect = () => setAuthorId('0d4df92c-372d-4d4b-80e0-8781581d71ff');
    const handleAndrewSelect = () => setAuthorId('0d4df92c-372d-4d4b-80e0-8781581d71ee');

    const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('/api/blogs', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ title, content, authorid })
        })
            .then(res => res.json())
            .then(data => {
                history.push(`/blogs/${data.id}`)
                console.log(data)
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        fetch(`/api/authors`)
        .then(res => res.json())
        .then(data => setAuthors(data))
    }, []);
    return (
        <div className="container">
            <form className="form-group col-md-6 bg-light">
                <label className="text-warning">Title</label>
                <input className="form-control" type="text" onChange={handleTitleInput} />
                <label className="text-warning">New Post</label>
                <textarea className="form-control" onChange={handleContentInput}></textarea>
                <select onChange = {handleSelect} className="form-select mt-3" aria-label="Default select sample">
                    <option value="0">Choose Which Author</option>
                    {authors.map((author) => (
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    ))}
                </select>
                <div className="d-flex justify-content-end">
                    <button onClick={handleSubmitClick} className="btn btn-warning my-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Home;
