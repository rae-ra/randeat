import React, { createContext, useContext, useState } from 'react';

// Create a context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('token', 'your-token'); // Example of saving a token
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the Auth context
export function useAuth() {
    return useContext(AuthContext);
}
