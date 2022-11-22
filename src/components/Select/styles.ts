import tw from "tw-tailwind";

interface SelectContainerProps {
  isSelected?: boolean;
}


export const SelectContainer = tw.button<SelectContainerProps>`
  p-4
  bg-base-button
  text-base-text
  hover:text-base-subtitle
  font-roboto
  font-normal
  text-xs
  leading-[1.4rem]
  uppercase
  rounded-md
  flex
  flex-row
  gap-3
  transition-colors
  purple-icon
  keep-icon-color
  ${props => props.isSelected? "bg-purple-light hover:bg-purple-light outline outline-1 outline-purple-default":"hover:bg-base-hover"}
`;