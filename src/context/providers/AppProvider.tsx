"use client";

import { ReactNode } from "react";
import { createContext } from "use-context-selector";
import { Coffee } from "../../constants/coffees";

interface AppProviderProps {
  children: ReactNode;
}

type AppContext = {
  cart: {
    coffees: Coffee[];
    totalValue: number;
  }
};

export const appContext = createContext({} as AppContext);

export function AppProvider({ children }: AppProviderProps) {
  return (
    <appContext.Provider
      value={{
        cart: {
          coffees: [],
          totalValue: 0
        }
      }}
    >
      {children}
    </appContext.Provider>
  );
}