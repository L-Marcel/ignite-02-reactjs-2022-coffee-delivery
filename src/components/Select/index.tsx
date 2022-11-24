import { ReactNode } from "react";
import { SelectContainer } from "./styles";

interface SelectProps {
  icon?: ReactNode;
  children: ReactNode;
  isSelected: boolean;
  onChange: (isSelected: boolean) => void;
  className?: string;
}

export function Select({
  icon,
  children,
  isSelected,
  className,
  onChange
}: SelectProps) {
  function handleOnChangeIsSelected() {
    onChange(!isSelected);
  }

  return (
    <SelectContainer
      selected={isSelected}
      onClick={handleOnChangeIsSelected}
      className={className}
      type="button"
    >
      {icon}
      {children}
    </SelectContainer>
  );
}