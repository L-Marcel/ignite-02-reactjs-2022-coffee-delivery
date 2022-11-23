
import { useContextSelector } from "use-context-selector";
import { appContext } from "../providers/AppProvider";

export function useCart() {
  return useContextSelector(appContext, value => ({
    addCoffeeAmount: value.addCoffeeAmount,
    setCoffeeAmount: value.setCoffeeAmount,
    removeCoffee: value.removeCoffee,
    totalValue: value.cart.totalValue,
    coffees: value.cart.coffees,
    coffeesAmount: value.cart.coffeesAmount
  }));
}