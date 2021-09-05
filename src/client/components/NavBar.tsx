import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link className = "btn btn-outline-warning m-2" to = '/'>Home</Link>
            <Link className = "btn btn-outline-warning m-2" to = '/blogs'>Blogs</Link>
        </div>
    )
}

export default NavBar;
