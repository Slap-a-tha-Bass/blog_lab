import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="d-flex justify-content-between">
            <div>
                <Link className="btn btn-outline-warning m-2" to='/'>Home</Link>
                <Link className="btn btn-outline-warning m-2" to='/blogs'>Blogs</Link>
                <Link className="btn btn-outline-warning m-2" to='/donate'>Donate</Link>
                <Link className="btn btn-outline-warning m-2" to='/contact'>Contact</Link>
            </div>
            <div>
                <Link className="btn btn-outline-warning m-2" to='/login'>Login</Link>
                <Link className="btn btn-outline-warning m-2" to='/register'>Sign In</Link>
            </div>
        </div>
    )
}

export default NavBar;
