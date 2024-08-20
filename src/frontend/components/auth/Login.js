import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';  // Import useAuth from the AuthProvider

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();  // Destructure the login function from useAuth
    const [wrongPass, setWrongPass] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', { username, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            login();  // Update the authentication state
            navigate('/dashboard'); // Redirect to the dashboard
        } catch (error) {
            console.error("Login error", error);
            setWrongPass(true);
            // Optionally, you can add error handling logic here, like setting an error state to display a message to the user
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {wrongPass && <p>USERNAME OR PASSWORD INCORRECT, TRY AGAIN</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
