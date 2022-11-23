import { Coffee, coffees } from "../../constants/coffees";
import { CoffeeCardFooter } from "./CoffeeCardFooter";
import { CoffeeDescription } from "./CoffeeDescription";
import { CoffeeImage } from "./CoffeeImage";
import { CoffeeTags } from "./CoffeeTags";
import { CoffeeCardContainer } from "./styles";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { src, title, description, tags, price } = coffees[coffee];

  return (
    <CoffeeCardContainer>
      <CoffeeImage
        className="-mt-10"
        src={src}
      />
      <CoffeeTags
        title={title}
        tags={tags}
      />
      <CoffeeDescription
        title={title}
        description={description}
      />
      <CoffeeCardFooter
        price={price}
        coffee={coffee}
      />
    </CoffeeCardContainer>
  );
}