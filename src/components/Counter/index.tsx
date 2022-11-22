import { CounterContainer } from "./styles";

export interface CounterProps {
  count?: number;
}

export function Counter({
  count = 0
}: CounterProps) {
  if(count === 0) {
    return null;
  }

  return (
    <CounterContainer>
      {count}
    </CounterContainer>
  );
}