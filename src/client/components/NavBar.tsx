import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link className = "btn btn-outline-warning m-2" to = '/'>Home</Link>
            <Link className = "btn btn-outline-warning m-2" to = '/blogs'>Blogs</Link>
            <Link className = "btn btn-outline-warning m-2" to = '/donate'>Donate</Link>
            <Link className = "btn btn-outline-warning m-2" to = '/contact'>Contact</Link>
        </div>
    )
}

export default NavBar;
