import { createContext , useContext , useState } from 'react';
const UserContext = createContext();

// context provider
export const UserPorvider = ({ children }) => {
    const [user, setUser] = useState(null);


    return(
        <UserContext.Provider value={{ user , setUser}} >
            {children}
        </UserContext.Provider>
    )
};
// ciustom hook for ease
export const useUser = () => useContext(UserContext);