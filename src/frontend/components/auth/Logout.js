import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/');
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
