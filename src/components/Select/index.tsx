import { ReactNode } from "react";
import { SelectContainer } from "./styles";

interface SelectProps {
  icon?: ReactNode;
  children: ReactNode;
  isSelected: boolean;
  onChange: (isSelected: boolean) => void; 
}

export function Select({
  icon,
  children,
  isSelected,
  onChange
}: SelectProps) {
  function handleOnChangeIsSelected() {
    onChange(!isSelected);
  }

  return (
    <SelectContainer
      isSelected={isSelected}
      onClick={handleOnChangeIsSelected}
    >
      {icon}
      {children}
    </SelectContainer>
  );
}