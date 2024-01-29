import React, { createContext, useState, ReactNode } from "react";

type User = {
  username: string;
  password: string;
  age: number;
};

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

// Create context with default value
export const UserContext = createContext<UserContextType | null>(null);

// props type for UserProvider
interface UserProviderProps {
  children: ReactNode;
}
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user: user!, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
