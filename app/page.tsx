
"use client";

import { useState } from "react";
import { Button } from "../src/components/Button";
import { IconButton } from "../src/components/Button/IconButton";
import { Counter } from "../src/components/Counter";
import { Icon } from "../src/components/Icon";
import { InputNumber } from "../src/components/Input/InputNumber";
import { Select } from "../src/components/Select";

export default function HomePage() {
  const [amount, setAmount] = useState(1);
  const [isSelected, setIsSelected] = useState(false);

  function handleOnChangeIsSelected() {
    setIsSelected(isSelected => !isSelected);
  }

  function handleOnIncrementAmount(returnMax: (amount: number) => number) {
    setAmount(amount => returnMax(amount + 1));
  }

  function handleOnDecrementAmount(returnMin: (amount: number) => number) {
    setAmount(amount => returnMin(amount - 1));
  }

  return (
    <div className="flex flex-col w-full h-full min-h-screen flex-1 gap-4 justify-center items-center">
      <Button>Hello!</Button>
      <IconButton
        icon={<Icon name="ShoppingCartSimple"/>}
      />
      <IconButton
        theme="yellow"
        icon={<Icon name="ShoppingCart"/>}
      />
      <IconButton
        theme="yellow"
        counter={<Counter
          count={3}
        />}
        icon={<Icon name="ShoppingCart"/>}
      />
      <IconButton
        theme="yellow"
        counter={<Counter
          count={18}
        />}
        icon={<Icon name="ShoppingCart"/>}
      />
      <IconButton
        theme="gray"
        icon={<Icon 
          name="Trash"
          width="1.175rem"
          height="1.175rem"
        />}
      >
        REMOVER
      </IconButton>
      <Select
        isSelected={isSelected}
        onChange={handleOnChangeIsSelected}
        icon={<Icon name="CreditCard"/>}
      >
        CARTÃO DE CRÉDITO
      </Select>
      <InputNumber
        value={amount}
        onIncrement={handleOnIncrementAmount}
        onDecrement={handleOnDecrementAmount}
      />
    </div>
  );
}