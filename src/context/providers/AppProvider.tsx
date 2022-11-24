import Router from "next/router";
import { ReactNode, useCallback, useReducer } from "react";
import { FieldValues } from "react-hook-form";
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
  onConfirmPurchase: (selectedPaymentMethod: number) => (data: FieldValues) => void;
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

  const onConfirmPurchase = useCallback((selectedPaymentMethod: number) => {
    return (data: FieldValues) => {
      if(selectedPaymentMethod < 0) {
        return;
      }

      const paymentMethods = ["Cartão de Crédito", "Cartão de Débito", "Dinheiro"];
      
      //Eu poderia passar as informações do carrinh aqui, mas como não vai ser usado mesmo, resolvi tirar
      Router.push({ 
        pathname: "/success",
        query: { 
          ...data,
          paymentMethod: paymentMethods[selectedPaymentMethod],
        }
      });
    };
  }, []);

  return (
    <appContext.Provider
      value={{
        cart,
        addCoffeeAmount,
        setCoffeeAmount,
        removeCoffee,
        onConfirmPurchase
      }}
    >
      {children}
    </appContext.Provider>
  );
}