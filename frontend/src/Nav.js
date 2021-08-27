import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <ul>
            <li><Link to='/'>Jobly</Link></li>
            <li><Link to='/companies'>Companies</Link></li>
            <li><Link to='/jobs'>Jobs</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/'>Log out</Link></li>
        </ul>
    );
}

export default Nav;