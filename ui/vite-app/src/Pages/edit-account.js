import React, {useState} from 'react';
import NavBar from '../Components/navbar-component';
import './edit-account.css';

const EditAccount = () => {
    const [username, setUsername] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        // Handle file upload with Multer
        setProfilePhoto(file);
    };

    const handleSaveChanges = () => {
        // Handle saving changes
    };

    const handleDeleteAccount = () => {
        // Handle account deletion
    };

    return (
        <div className="edit-account-container">
            <NavBar/>
            <div className="edit-account-content">
                <h1>Edit Account</h1>

                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Change Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="profile-photo-section">
                    <div className="profile-photo">
                        {profilePhoto && (
                            <img
                                src={URL.createObjectURL(profilePhoto)}
                                alt="Profile"
                                style={{width: '200px', height: '200px'}}
                            />
                        )}
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        style={{display: 'none'}}
                        id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="button">
                        Change Profile Photo
                    </label>
                </div>

                <button className="save-button" onClick={handleSaveChanges}>
                    Save Changes
                </button>

                <button className="delete-button" onClick={handleDeleteAccount}>
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default EditAccount;