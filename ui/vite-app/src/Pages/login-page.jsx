import React, {useState} from 'react';
import NavBar from '../Components/navbar-component.jsx';
import {useGoogleLogin} from "@react-oauth/google";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px'
        },
        title: {
            fontSize: '24px',
            marginBottom: '20px'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            width: '300px'
        },
        input: {
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
        },
        button: {
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer'
        },
        googleButton: {
            backgroundColor: '#db4437'
        },
        checkbox: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO: Handle login logic
    };

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse); // TODO: prolly remove this
            // TODO: Send tokenResponse.access_token to your backend to create a session
        },
            onError: () => console.log('Login Failed'),
    });

    return (
        <div>
            <div style={styles.container}>
                <h1 style={styles.title}>Log in to blog site</h1>
                <form style={styles.form} onSubmit={handleLogin}>
                    <button
                        type="button"
                        style={{...styles.button, ...styles.googleButton}}
                        onClick={handleGoogleLogin}
                    >
                        Log in with Google
                    </button>
                    <input
                        type="email"
                        placeholder="Email"
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div style={styles.checkbox}>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label>Remember me</label>
                    </div>
                    <button type="submit" style={styles.button}>
                        Log in
                    </button>
                    <button
                        type="button"
                        style={styles.button}
                        onClick={() => { // TODO: Handle create account
                        }}
                    >
                        Create account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;