import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';  // Import useAuth from the AuthProvider
import './Login.css';

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
        }
    };

    return (
        <div>
            <h2>Login</h2>
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
                <button type="submit" className="submit">Login</button>
            </form>
            {wrongPass && <div className="wrong">WRONG USERNAME OR PASSWORD, PLEASE TRY AGAIN</div>}
        </div>
    );
}

export default Login;
