
import tw from "tw-tailwind";
import { IconButtonTheme } from "./IconButton";

export const ButtonContainer = tw.button`
  w-full
  py-3
  bg-yellow-default
  font-roboto
  font-bold
  text-sm
  leading-[1.4rem]
  uppercase
  text-base-white
  rounded-md
  transition-colors
  hover:bg-yellow-dark
`;

export interface IconButtonContainerProps {
  theme: IconButtonTheme;
}

export const IconButtonContainer = tw.button<IconButtonContainerProps>`
  relative
  flex
  flex-row
  justify-center
  items-center
  ${props => props.children? "min-w-[2.375rem]":"w-[2.375rem] h-[2.375rem]"}
  p-2
  rounded-md
  ${props => props.theme === "purple"? 
    "text-base-card bg-purple-dark hover:bg-purple-default":
    props.theme === "yellow"? "text-yellow-dark bg-yellow-light":
      props.theme === "gray"? "remove-button":""}
`;