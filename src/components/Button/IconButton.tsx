import { ReactNode } from "react";
import { ButtonProps } from ".";
import { IconButtonContainer } from "./styles";

export type IconButtonTheme = "purple" | "yellow" | "gray" | "transparent";

export interface IconButtonProps extends ButtonProps {
  icon: ReactNode;
  counter?: ReactNode;
  theme?: IconButtonTheme;
}

export function IconButton({
  icon,
  theme = "purple",
  counter,
  children,
  type = "button",
  ...rest
}: IconButtonProps) {
  return (
    <IconButtonContainer
      theme={theme}
      type={type}
      {...rest}
    >
      {icon}
      {children}
      {counter}
    </IconButtonContainer>
  );
}