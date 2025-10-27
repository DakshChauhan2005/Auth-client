import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
const UserContext = createContext();

// context provider
export const UserPorvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // on mount, attempt to fetch current user from server
        let mounted = true;
        async function fetchMe() {
            try {
                const res = await axios.get("/auth/me", { withCredentials: true });
                if (!mounted) return;
                setUser(res.data.user || null);
            } catch (err) {
                // if 401 or network error, keep user as null
                console.error(err);
            } finally {
                if (mounted) setLoading(false);
            }
        }
        fetchMe();
        return () => { mounted = false; };
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser, loading, setLoading }} >
            {children}
        </UserContext.Provider>
    )
};
// ciustom hook for ease
export const useUser = () => useContext(UserContext);