import { createContext, useEffect, useState, useContext } from 'react';
import { getUser } from '../services/users.js';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, []);


  return <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>;
};

export const useUser = () => useContext(UserContext)