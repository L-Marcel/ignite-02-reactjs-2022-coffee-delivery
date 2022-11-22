import { CoffeeTagContainer, CoffeeTagsContainer } from "./styles";

interface CoffeeTags {
  tags: string[]; 
  title: string;
}

export function CoffeeTags({ tags, title }: CoffeeTags) {
  return (
    <CoffeeTagsContainer>
      {
        tags.map(tag => {
          return (
            <CoffeeTagContainer key={`${title}-${tag}`}>
              {tag}
            </CoffeeTagContainer>
          );
        })
      }
    </CoffeeTagsContainer>
  );
}