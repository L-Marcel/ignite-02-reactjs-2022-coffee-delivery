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
  ...rest
}: IconButtonProps) {
  return (
    <IconButtonContainer
      theme={theme}
      {...rest}
    >
      {icon}
      {children}
      {counter}
    </IconButtonContainer>
  );
}