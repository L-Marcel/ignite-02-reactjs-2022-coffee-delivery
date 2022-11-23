import { Coffee, coffees } from "../../constants/coffees";
import { Cart } from "../providers/AppProvider";

enum CartReducerActionType {
  ADD_COFFEE_AMOUNT = "ADD_COFFEE_AMOUNT",
  SET_COFFEE_AMOUNT = "SET_COFFEE_AMOUNT",
  REMOVE_COFFEE = "REMOVE_COFFEE"
}

type CartReducerAction = {
  type: CartReducerActionType;
  coffee: Coffee;
  amount?: number;
};

export class CartReducer {
  static reducer(state: Cart, action: CartReducerAction) {
    const coffeesInCart = { ...state.coffees };
    const oldAmount = coffeesInCart[action.coffee] ?? 0;
    let newAmount = oldAmount;

    switch(action.type) {
    case CartReducerActionType.ADD_COFFEE_AMOUNT:
      newAmount += (action.amount ?? 0);
      break;
    case CartReducerActionType.SET_COFFEE_AMOUNT:
      newAmount = (action.amount ?? 0);
      break;
    case CartReducerActionType.REMOVE_COFFEE:
      newAmount = 0;
      break;
    default:
      break;
    }

    const newCoffeesInCart = {
      ...coffeesInCart,
      [action.coffee]: newAmount
    };

    const { coffeesAmount, totalValue } = Object.entries(newCoffeesInCart).reduce((cartParams, [coffee, amount]) => {
      const { price } = coffees[coffee as Coffee];
      
      cartParams.coffeesAmount += amount;
      cartParams.totalValue += (price * amount);

      return cartParams;
    }, {
      coffeesAmount: 0,
      totalValue: 0 
    });

    return {
      coffees: newCoffeesInCart,
      coffeesAmount,
      totalValue
    };
  }

  static setCoffeeAmountAction(coffee: Coffee, amount: number) {
    return {
      type: CartReducerActionType.SET_COFFEE_AMOUNT,
      coffee,
      amount
    } as CartReducerAction;
  }

  static addCoffeeAmountAction(coffee: Coffee, amount: number) {
    return {
      type: CartReducerActionType.ADD_COFFEE_AMOUNT,
      coffee,
      amount
    } as CartReducerAction;
  }

  static removeCoffeeAction(coffee: Coffee) {
    return {
      type: CartReducerActionType.REMOVE_COFFEE,
      coffee
    } as CartReducerAction;
  }
}