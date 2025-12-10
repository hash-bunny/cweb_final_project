import React from 'react';
import {Link} from 'react-router-dom';
import ProfilePhoto from './profile-photo-component.jsx';

const NavBar = () => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        boxSizing: 'border-box'
    };

    const titleStyle = {
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    };

    return (
        <nav style={navStyle}>
            <Link to="/" style={titleStyle}>
                BLOG SITE
            </Link>
            <ProfilePhoto size="40px"/>
        </nav>
    );
};

export default NavBar;