import React from 'react';

const ProfilePhoto = ({imagePath, size = '50px'}) => {
    const style = {
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #ccc'
    };

    return (
        <img
            src={imagePath || '/default-profile.png'}
            alt="Profile"
            style={style}
            onError={(e) => {
                e.target.src = '/default-profile.png';
            }}
        />
    );
};


export default ProfilePhoto;