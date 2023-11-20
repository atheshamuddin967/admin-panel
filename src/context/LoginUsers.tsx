// UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext([]);
const [currentUser, setCurrentUser] = useState(null); // New state for the current user

export const UserProvider = ({ children }: any) => {
  const [userList, setUserList] = useState([]);

  const addUser = (userData: any) => {
    const uniqueId = Date.now();
    const newUser = { ...userData, id: uniqueId };
    setUserList((prevUserList) => [...prevUserList, newUser]);
  };

  const loginUser = (userData: any) => {
    // Add logic to handle login (if needed)
    // For now, just add the user to the array
    addUser(userData);
    setCurrentUser(userData);
  };

  return (
    <UserContext.Provider value={{ userList, addUser, loginUser, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
