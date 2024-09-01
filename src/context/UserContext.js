'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiPost } from '@/handlers/apiHandler';
import { useRouter } from 'next/navigation';
const UserContext = createContext();


// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Simulated authentication check (replace with real API call)
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const storedUser = localStorage.getItem('user'); // Simulate user retrieval from storage
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        };
        fetchUser();
    }, []);

    const login = async (userData, redirectPath) => {
        const response = await apiPost('/api/auth/login/', userData);
        console.log(response);
        setUser(response);
        localStorage.setItem('user', JSON.stringify(userData)); // Store user in local storage (replace with secure storage in production)
        router.push('/')
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
};
