import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

function Home() {
    const { currentUser } = useContext(UserContext);

    return (
        <div className='Home'>
            <h1>Jobly</h1>
            <p>All the jobs in one convenient place.</p>
            {currentUser 
                ? <h2>Welcome Back, {currentUser.username}</h2>
                : (
                    <div>
                        <Link to='/login'>Log In</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                )}
        </div>
    )
}

export default Home;