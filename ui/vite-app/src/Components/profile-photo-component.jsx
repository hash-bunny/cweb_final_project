import React, {useState} from 'react';

const ProfilePhoto = ({imagePath, size = '50px'}) => {
    const style = {
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #ccc'
    };

    const [imgSrc, setImgSrc] = useState(imagePath || '/default-profile.png');
    // Add a state to track if we have already tried the fallback to prevent loops
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            setImgSrc('/default-profile.png');
            setHasError(true);
        }
    };

    return (
        <img
            src={imgSrc}
            alt="Profile"
            style={style}
            onError={(e) => {
                e.target.src = imgSrc;
            }}
            onError={handleError}
        />
    );
};


export default ProfilePhoto;