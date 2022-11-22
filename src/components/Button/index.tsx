import { ButtonContainer } from "./styles";

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement>;

export function Button({
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      {...rest}
    />
  );
}