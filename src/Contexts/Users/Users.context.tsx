import { createContext, ReactNode, useState } from 'react';

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  test: () => void;
};

const initial = {
    test: () => {}
}

export const UserContext = createContext<UserContextType>(initial);

export const UserContextProvider = ({ children }: UserContextProps) => {

  const test = () => {
      alert('Test')
  }

  return (
    <UserContext.Provider
      value={{
          test
      }}
    >
      {children}
    </UserContext.Provider>
  );
};