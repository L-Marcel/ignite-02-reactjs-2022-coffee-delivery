import { CounterContainer } from "./styles";

export interface CounterProps {
  count?: number;
}

export function Counter({
  count = 0
}: CounterProps) {
  return (
    <CounterContainer>
      {count}
    </CounterContainer>
  );
}