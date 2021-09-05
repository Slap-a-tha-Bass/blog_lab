import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <form className="form-group col-md-6">
                <label className="text-warning">Title</label>
                <input className="form-control" type="text" />
                <label className="text-warning">New Post</label>
                <textarea className="form-control"></textarea>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-warning my-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Home;
