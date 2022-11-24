import { useState } from "react";
import { Coffee, coffees } from "../../constants/coffees";
import { useCart } from "../../context/hooks/useCart";
import { IconButton } from "../Button/IconButton";
import { Icon } from "../Icon";
import { InputNumber } from "../Input/InputNumber";
import { CoffeeImage } from "./CoffeeImage";
import { CoffeeCartItemContainer, CoffeeCartItemPrice, CoffeeCartItemTitle } from "./styles";

interface CoffeeCartItemProps {
  coffee: Coffee;
}


export function CoffeeCartItem({ coffee }: CoffeeCartItemProps) {
  const { coffees: coffeesInCart, removeCoffee, setCoffeeAmount } = useCart();

  const { price, title, src } = coffees[coffee];
  const amount = coffeesInCart[coffee];

  function handleOnIncrementAmount(returnMax: (amount: number) => number) {
    setCoffeeAmount(coffee, returnMax(amount + 1));
  }

  function handleOnDecrementAmount(returnMin: (amount: number) => number) {
    setCoffeeAmount(coffee, returnMin(amount - 1));
  }

  function handleOnRemoveCoffee() {
    removeCoffee(coffee);
  }
  
  const value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(price * amount);

  return (
    <CoffeeCartItemContainer>
      <div className="flex flex-row gap-5">
        <CoffeeImage
          width={64}
          height={64}
          src={src}
        />
        <div className="flex flex-col gap-2">
          <CoffeeCartItemTitle>{title}</CoffeeCartItemTitle>
          <div className="flex flex-row gap-2">
            <InputNumber
              value={amount}
              onIncrement={handleOnIncrementAmount}
              onDecrement={handleOnDecrementAmount}
              className="h-8"
            />
            <IconButton
              theme="gray"
              icon={<Icon 
                name="Trash"
                width="1.175rem"
                height="1.175rem"
              />}
              onClick={handleOnRemoveCoffee}
            >
              REMOVER
            </IconButton>
          </div>
        </div>
      </div>
      <CoffeeCartItemPrice>{value}</CoffeeCartItemPrice>
    </CoffeeCartItemContainer>
  );
}