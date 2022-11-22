import { CoffeeDescriptionContainer, CoffeeDescriptionContent, CoffeeDescriptionTitle } from "./styles";

interface CoffeeDescriptionProps {
  title: string;
  description: string;
}

export function CoffeeDescription({ title, description }: CoffeeDescriptionProps) {
  return (
    <CoffeeDescriptionContainer>
      <CoffeeDescriptionTitle>
        {title}
      </CoffeeDescriptionTitle>
      <CoffeeDescriptionContent>
        {description}
      </CoffeeDescriptionContent>
    </CoffeeDescriptionContainer>
  );
}