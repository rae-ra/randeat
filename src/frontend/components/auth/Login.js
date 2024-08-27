import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";

function Login({ showMessage }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
    const [wrongPass, setWrongPass] = useState(false);

    useEffect(() => {
        if (showMessage) {
            toast.info("Oh, you need to be logged in to access this page!");
        }
    }, [showMessage]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', { username, password });
            const token = response.data.token;
            login(token);
            navigate('/dashboard');
        } catch (error) {
            console.error("Login error", error);
            setWrongPass(true);
        }
    };

    return (
        <div className="login-container">
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
            <ToastContainer />
        </div>
    );
}

export default Login;
