import { IconButton } from "../Button/IconButton";
import { Icon } from "../Icon";
import { InputNumberContainer } from "./styles";

interface InputNumberProps {
  value: number;
  onIncrement: (returnMin: (value: number) => number) => void;
  onDecrement: (returnMax: (value: number) => number) => void;
  min?: number;
  max?: number;
}

export function InputNumber({
  onIncrement,
  onDecrement,
  value = 1,
  min = 1,
  max
}: InputNumberProps) {
  function returnMax(value: number) {
    if(max === undefined || (max >= (value + 1))) {
      return value;
    }

    return max;
  }

  function returnMin(value: number) {
    if(min === undefined || (min <= (value - 1))) {
      return value;
    }

    return min;
  }

  function handleIncrement() {
    onIncrement(returnMax);
  }

  function handleDecrement() {
    onDecrement(returnMin);
  }

  return (
    <InputNumberContainer>
      <IconButton
        onClick={handleDecrement}
        theme="transparent"
        icon={<Icon 
          name="Minus"
          width="0.875rem"
          height="0.875rem"
        />}
      />
      <p>{value}</p>
      <IconButton
        onClick={handleIncrement}
        theme="transparent"
        icon={<Icon 
          name="Plus"
          width="0.875rem"
          height="0.875rem"
        />}
      />
    </InputNumberContainer>
  );
}