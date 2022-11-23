import { createContext, useEffect, useState } from 'react';
import { getUser } from '../services/users.js';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

export { UserContext, UserProvider };