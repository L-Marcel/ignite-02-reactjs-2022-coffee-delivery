
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../src/components/Button";
import { IconButton } from "../src/components/Button/IconButton";
import { CoffeeCard } from "../src/components/Coffee/CoffeeCard";
import { Counter } from "../src/components/Counter";
import { Icon } from "../src/components/Icon";
import { Input } from "../src/components/Input";
import { Select } from "../src/components/Select";

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
      <Input
        register={register("name")}
      />
      <CoffeeCard/>
    </div>
  );
}