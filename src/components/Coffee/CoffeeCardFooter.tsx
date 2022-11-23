import { useState } from "react";
import { Coffee } from "../../constants/coffees";
import { useCart } from "../../context/hooks/useCart";
import { IconButton } from "../Button/IconButton";
import { Icon } from "../Icon";
import { InputNumber } from "../Input/InputNumber";
import { CoffeeCardFooterContainer, CoffeeCardFooterPrice, CoffeeCardFooterPriceValue } from "./styles";

interface CoffeeCardFooter {
  price: number;
  coffee: Coffee;
}

export function CoffeeCardFooter({ price, coffee }: CoffeeCardFooter) {
  const { addCoffeeAmount } = useCart();
  const [amount, setAmount] = useState(1);

  function handleOnIncrementAmount(returnMax: (amount: number) => number) {
    setAmount(amount => returnMax(amount + 1));
  }

  function handleOnDecrementAmount(returnMin: (amount: number) => number) {
    setAmount(amount => returnMin(amount - 1));
  }

  function handleAddCoffeeAmount() {
    addCoffeeAmount(coffee, amount);
  }
  
  const [, value] = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(price).split("R$");

  return (
    <CoffeeCardFooterContainer>
      <CoffeeCardFooterPrice>
        R$<CoffeeCardFooterPriceValue>{value}</CoffeeCardFooterPriceValue>
      </CoffeeCardFooterPrice>
      <div className="ml-8 flex flex-row gap-2">
        <InputNumber
          value={amount}
          onIncrement={handleOnIncrementAmount}
          onDecrement={handleOnDecrementAmount}
        />
        <IconButton
          icon={<Icon name="ShoppingCartSimple"/>}
          onClick={handleAddCoffeeAmount}
        />
      </div>
    </CoffeeCardFooterContainer>
  );
}