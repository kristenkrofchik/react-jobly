import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from './UserContext';

function Nav({logout}) {
    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return (
            <ul>
                <li>
                    <NavLink to='/companies'>Companies</NavLink>
                </li>
                <li>
                    <NavLink to='/jobs'>Jobs</NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <Link to='/' onClick={logout}>Log out {currentUser.username}</Link>
                </li>
            </ul>
        );
    };

    function loggedOutNav() {
        return (
            <ul>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='signup'>Sign Up</NavLink>
                </li>
            </ul>
        );
    }

    return (
        <nav>
            <Link to='/'>Jobly</Link>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    );
}

export default Nav;