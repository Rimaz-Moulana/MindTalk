import React from 'react';
import './LinkExpired.css';
import { Link } from 'react-router-dom';

const LinkExpired = () => {


    return (
        <div className="link-expired-container">
            <h1>Meeting Expired</h1>
            <p>The Meeting Scheduled Has Expired.</p>
            <Link to="/" className="home-btn">Go to Home</Link>
        </div>
    );
}

export default LinkExpired;
