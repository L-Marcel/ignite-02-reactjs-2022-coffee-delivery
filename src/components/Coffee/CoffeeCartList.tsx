import { Coffee } from "../../constants/coffees";
import { useCart } from "../../context/hooks/useCart";
import { CoffeeCartItem } from "./CoffeeCartItem";
import { CoffeeCartListPriceItem } from "./styles";

export function CoffeeCartList() {
  const { coffees, totalValue } = useCart();
  const deliveryValue = 3.5;

  const coffeesPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(totalValue);

  const deliveryPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(deliveryValue);

  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(totalValue + deliveryValue);

  return (
    <>
      { Object.entries(coffees).map(([coffee, amount]) => {
        if(amount < 1) {
          return null;
        }

        return (
          <>
            <CoffeeCartItem
              key={coffee}
              coffee={coffee as Coffee}
            />
            <hr className="border-base-button"/>
          </>
        );
      }) }
      <ul className="flex flex-col gap-3 w-full">
        <CoffeeCartListPriceItem>
          <p>Total de itens</p>
          <p>{coffeesPrice}</p>
        </CoffeeCartListPriceItem>
        <CoffeeCartListPriceItem>
          <p>Entrega</p>
          <p>{deliveryPrice}</p>
        </CoffeeCartListPriceItem>
        <CoffeeCartListPriceItem>
          <p>Total</p>
          <p>{totalPrice}</p>
        </CoffeeCartListPriceItem>
      </ul>
    </>
  );
}