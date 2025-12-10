import React from 'react';
import {Link} from 'react-router-dom';

const ProfileModalComponent = ({isOpen, onClose, profilePhotoUrl, isAdmin, onLogout}) => {
    if (!isOpen) return null;

    const styles = {
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        },
        modalContent: {
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '300px',
            position: 'relative'
        },
        profilePhoto: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            position: 'absolute',
            top: '20px',
            right: '20px'
        },
        linkContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginTop: '100px'
        },
        link: {
            textDecoration: 'none',
            color: '#333',
            padding: '10px',
            borderRadius: '4px',
            backgroundColor: '#f5f5f5',
            textAlign: 'center'
        }
    };

    return (
        <div style={styles.modalOverlay} onClick={onClose}>
            <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
                <img
                    src={profilePhotoUrl}
                    alt="Profile"
                    style={styles.profilePhoto}
                />
                <div style={styles.linkContainer}>
                    <Link to="/edit-account" style={styles.link}>
                        Edit Account
                    </Link>
                    {isAdmin && (
                        <Link to="/admin-panel" style={styles.link}>
                            Admin Panel
                        </Link>
                    )}
                    <Link to="/" style={styles.link} onClick={onLogout}>
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileModalComponent;
