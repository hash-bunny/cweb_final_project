import React from 'react';
import {Link} from 'react-router-dom';
import ProfilePhoto from './profile-photo-component.jsx';

const PostListItem = ({title, imagePath, postId}) => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        border: '1px solid #eee',
        borderRadius: '4px',
        margin: '0.5rem 0'
    };

    const titleStyle = {
        fontSize: '1.1rem',
        margin: 0,
        color: '#333'
    };

    return (
        <Link to={`/post/${postId}`} style={{textDecoration: 'none'}}>
            <div style={containerStyle}>
                <h3 style={titleStyle}>{title}</h3>
                <ProfilePhoto imagePath={imagePath} size="40px"/>
            </div>
        </Link>
    );
};

export default PostListItem;