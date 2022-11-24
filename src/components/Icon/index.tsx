import { CreditCard, IconProps, ShoppingCart, ShoppingCartSimple, Trash, Plus, Minus, MapPin, Timer, Coffee, Package, Bank, Money, CurrencyDollar, IconWeight, MapPinLine } from "phosphor-react";

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
  />,
  Plus: (props: IconProps) => <Plus
    width="1.375rem"
    height="1.375rem"
    {...props}
  />,
  Minus: (props: IconProps) => <Minus
    width="1.375rem"
    height="1.375rem"
    {...props}
  />,
  MapPin: (props: IconProps) => <MapPin
    width="1.375rem"
    height="1.375rem"
    weight="fill"
    {...props}
  />,
  MapPinLine: (props: IconProps) => <MapPinLine
    width="1.375rem"
    height="1.375rem"
    {...props}
  />,
  Timer: (props: IconProps) => <Timer
    width="1.375rem"
    height="1.375rem"
    weight="fill"
    {...props}
  />,
  Coffee: (props: IconProps) => <Coffee
    width="1.375rem"
    height="1.375rem"
    weight="fill"
    {...props}
  />,
  Package: (props: IconProps) => <Package
    width="1.375rem"
    height="1.375rem"
    weight="fill"
    {...props}
  />,
  Bank: (props: IconProps) => <Bank
    width="1.375rem"
    height="1.375rem"
    {...props}
  />,
  Money: (props: IconProps) => <Money
    width="1.375rem"
    height="1.375rem"
    {...props}
  />,
  CurrencyDollar: (props: IconProps) => <CurrencyDollar
    width="1.375rem"
    height="1.375rem"
    {...props}
  />
};

type ClientIconType = {
  name: keyof typeof icons;
  width?: string;
  height?: string;
  weight?: IconWeight;
  className?: string;
};

export function Icon({ name, ...props }: ClientIconType) {
  const CurrentIcon = icons[name];
  return (
    <CurrentIcon
      {...props}
    />
  );
}