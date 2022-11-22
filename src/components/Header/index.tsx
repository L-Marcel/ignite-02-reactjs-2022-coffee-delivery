import Image from "next/image";
import { IconButton } from "../Button/IconButton";
import { Counter } from "../Counter";
import { Icon } from "../Icon";
import { HeaderContainer, HeaderLocation, HeaderLocationText } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Image
        src="/assets/Logo.png"
        alt="Um copo de café com o desenho de um foguete, do seu lado está escrito 'Coffee Delivery'"
        height={40}
        width={85}
      />
      <div className="flex flex-row gap-3">
        <HeaderLocation>
          <Icon
            name="MapPin"
          />
          <HeaderLocationText>Macau, RN</HeaderLocationText>
        </HeaderLocation>
        <IconButton
          theme="yellow"
          counter={<Counter
            count={0}
          />}
          icon={<Icon name="ShoppingCart"/>}
        />
      </div>
    </HeaderContainer>
  );
}