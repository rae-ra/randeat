import React, { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

// Create a context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userIdentity, setUserIdentity] = useState(null); // To store user identity (role, username, etc.)

    const login = (token) => {
        setIsAuthenticated(true);
        localStorage.setItem('token', token); // Save the token in localStorage
        console.log(jwtDecode(token.toString()));
        // Decode token to get user identity
        const decodedToken = jwtDecode(token);

        setUserIdentity(decodedToken); // Store the decoded user identity in state
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserIdentity(null); // Clear the user identity
        localStorage.removeItem('token');
    };

    useEffect(() => {
        // Check if a token exists in localStorage when the app starts
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserIdentity(decodedToken); // Restore the user identity from the token
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, userIdentity, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the Auth context
export function useAuth() {
    return useContext(AuthContext);
}
