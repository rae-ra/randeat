import React, { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode

// Create a context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userIdentity, setUserIdentity] = useState(null); // To store user identity (role, username, etc.)
    const [logoutTimer, setLogoutTimer] = useState(null); // Store the timeout for logout

    const scheduleLogout = (exp) => {
        const expirationTime = exp * 1000 - Date.now(); // Calculate time left until expiration
        console.log(expirationTime)
        setLogoutTimer(setTimeout(logout, expirationTime));
    };

    const login = (token) => {
        const decodedToken = jwtDecode(token);

        setIsAuthenticated(true);
        setUserIdentity(decodedToken.sub); // Store the decoded user identity in state
        localStorage.setItem('token', token); // Save the token in localStorage

        if (logoutTimer) {
            clearTimeout(logoutTimer); // Clear any existing timeout if the user logs in again
        }
        scheduleLogout(decodedToken.exp); // Schedule automatic logout
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserIdentity(null); // Clear the user identity
        localStorage.removeItem('token');

        if (logoutTimer) {
            clearTimeout(logoutTimer); // Clear the logout timer on manual logout
        }
    };

    useEffect(() => {
        // Check if a token exists in localStorage when the app starts
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 > Date.now()) {
                setIsAuthenticated(true);
                setUserIdentity(decodedToken); // Restore the user identity from the token
                scheduleLogout(decodedToken.exp); // Schedule automatic logout
            } else {
                // Token has expired, clear it from storage
                localStorage.removeItem('token');
            }
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
