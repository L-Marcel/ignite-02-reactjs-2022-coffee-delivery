"use client";

import { CreditCard, IconProps, ShoppingCart, ShoppingCartSimple, Trash } from "phosphor-react";

const icons = {
  ShoppingCart: (props: IconProps) => <ShoppingCart
    weight="fill"
    width="1.375rem"
    height="1.375rem"
    {...props}
  />,
  ShoppingCartSimple: (props: IconProps) => <ShoppingCartSimple
    width="1.375rem"
    height="1.375rem"
    {...props}
  />,
  Trash: (props: IconProps) => <Trash
    width="1.375rem"
    height="1.375rem"
    {...props}
  />,
  CreditCard: (props: IconProps) => <CreditCard
    width="1.375rem"
    height="1.375rem"
    {...props}
  />
};

type ClientIconType = {
  name: keyof typeof icons;
  width?: string;
  height?: string;
};

export function Icon({ name, ...props }: ClientIconType) {
  const CurrentIcon = icons[name];
  return (
    <CurrentIcon
      {...props}
    />
  );
}