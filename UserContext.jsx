import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));
 const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
             setLoading(true);
            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }
            try {
                const response = await fetch("http://localhost:5000/user", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    setUser(null);
                }
            } catch (error) {
                setUser(null);
            }
            setLoading(false);
        };
        fetchUser();
    }, [token]);

    return (
        <UserContext.Provider value={{ user, setUser, setToken }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;