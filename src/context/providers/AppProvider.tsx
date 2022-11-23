import { ReactNode, useCallback, useReducer } from "react";
import { createContext } from "use-context-selector";
import { Coffee } from "../../constants/coffees";
import { CartReducer } from "../reducers/CartReducer";

interface AppProviderProps {
  children: ReactNode;
}

export type Cart = {
  coffees: { [coffee: string]: number };
  coffeesAmount: number;
  totalValue: number;
};

type AppContext = {
  cart: Cart,
  addCoffeeAmount: (coffee: Coffee, amount: number) => void;
  setCoffeeAmount: (coffee: Coffee, amount: number) => void;
  removeCoffee: (coffee: Coffee) => void;
};

export const appContext = createContext({} as AppContext);

export function AppProvider({ children }: AppProviderProps) {
  const [cart, dispatch] = useReducer(CartReducer.reducer, {
    coffees: {},
    coffeesAmount: 0,
    totalValue: 0
  });

  const addCoffeeAmount = useCallback((coffee: Coffee, amount: number) => {
    dispatch(CartReducer.addCoffeeAmountAction(coffee, amount));
  }, [dispatch]);

  const setCoffeeAmount = useCallback((coffee: Coffee, amount: number) => {
    dispatch(CartReducer.setCoffeeAmountAction(coffee, amount));
  }, [dispatch]);

  const removeCoffee = useCallback((coffee: Coffee) => {
    dispatch(CartReducer.removeCoffeeAction(coffee));
  }, [dispatch]);

  console.log(cart);
  return (
    <appContext.Provider
      value={{
        cart,
        addCoffeeAmount,
        setCoffeeAmount,
        removeCoffee
      }}
    >
      {children}
    </appContext.Provider>
  );
}