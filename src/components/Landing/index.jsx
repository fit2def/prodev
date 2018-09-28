import React from 'react';

function Landing({ authedUser }) {
    return (
        <div>
            <h1>Hello, {authedUser}!</h1>
        </div>
    );
}

export default Landing;