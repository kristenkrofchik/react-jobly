import React from 'react';

function Home({currentUser}) {
    return (
        <div className='Home'>
            <h1>Jobly</h1>
            <p>All the jobs in one convenient place.</p>
            <h2>Welcome Back, {currentUser}</h2>
        </div>
    )
}

export default Home;