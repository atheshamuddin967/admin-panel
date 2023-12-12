// File: UserContext.js
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface UserContextType {
  myuser: any[] | null;
  setMyUser: Dispatch<SetStateAction<any[] | null>>;
}
const initialState: UserContextType = {
  myuser: [],
  setMyUser: () => {}, // Provide a default function to satisfy the type
};
const UserContext = createContext(initialState);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [myuser, setMyUser] = useState<UserContextType["myuser"]>(
    initialState.myuser
  );

  return (
    <UserContext.Provider value={{ myuser, setMyUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
