"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../src/components/Button";
import { IconButton } from "../../src/components/Button/IconButton";
import { CoffeeCard } from "../../src/components/Coffee/CoffeeCard";
import { CoffeeCartItem } from "../../src/components/Coffee/CoffeeCartItem";
import { Counter } from "../../src/components/Counter";
import { Icon } from "../../src/components/Icon";
import { Input } from "../../src/components/Input";
import { Select } from "../../src/components/Select";

export default function HomePage() {
  const { register } = useForm();

  const [isSelected, setIsSelected] = useState(false);

  function handleOnChangeIsSelected() {
    setIsSelected(isSelected => !isSelected);
  }

  return (
    <div className="flex flex-col w-full h-full min-h-screen flex-1 gap-4 justify-center items-center">
      <Button>Hello!</Button>
      <IconButton
        theme="yellow"
        icon={<Icon name="ShoppingCart"/>}
      />
 
      <IconButton
        theme="yellow"
        counter={<Counter
          count={18}
        />}
        icon={<Icon name="ShoppingCart"/>}
      />
      <Select
        isSelected={isSelected}
        onChange={handleOnChangeIsSelected}
        icon={<Icon name="CreditCard"/>}
      >
        CARTÃO DE CRÉDITO
      </Select>
      <Input
        register={register("name")}
      />
      <CoffeeCard/>
      <CoffeeCartItem/>
    </div>
  );
}