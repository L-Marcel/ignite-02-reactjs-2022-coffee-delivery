import { ButtonContainer } from "./styles";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      type={type}
      {...rest}
    />
  );
}