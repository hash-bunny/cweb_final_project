import React, {useState} from 'react';
import NavBar from '../Components/navbar-component.jsx';
import './create-account-page.css';

const CreateAccountPage = () => {
    const [formInputs, setFormInputs] = useState({
        username: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormInputs(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle account creation
    };

    return (
        <div className="create-account-container">
            <div className="create-account-content">
                <h1>Create Account</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formInputs.username}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formInputs.email}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                    <input
                        type="email"
                        name="confirmEmail"
                        placeholder="Confirm Email"
                        value={formInputs.confirmEmail}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formInputs.password}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formInputs.confirmPassword}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                    <button type="submit" className="create-button">Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAccountPage;
