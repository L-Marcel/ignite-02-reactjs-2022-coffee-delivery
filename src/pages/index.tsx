import Head from "next/head";
import Image from "next/image";
import { CoffeeCard } from "../components/Coffee/CoffeeCard";
import { Icon } from "../components/Icon";
import { Coffee, coffees } from "../constants/coffees";
import { HomeBannerSectionContainer, HomeBannerSubtitle, HomeBannerTitle, HomeBannerTopic, HomeBannerTopicIconContainer, HomeCoofeesSectionContainer, HomeCoofeesSectionTitle, HomeMainContainer } from "../layout/Home/styles";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Coffee Delivery</title>
      </Head>
      <HomeMainContainer>
        <HomeBannerSectionContainer>
          <div className="flex flex-col gap-16 lg:min-w-[36.75rem]">
            <article className="flex flex-col gap-4">
              <HomeBannerTitle>
                Encontre o café perfeito para qualquer hora do dia
              </HomeBannerTitle>
              <HomeBannerSubtitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
              </HomeBannerSubtitle>
            </article>
            <ul className="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-10">
              <HomeBannerTopic>
                <HomeBannerTopicIconContainer className="bg-yellow-dark">
                  <Icon name="ShoppingCart"/>
                </HomeBannerTopicIconContainer>
                Compra simples e segura
              </HomeBannerTopic>
              <HomeBannerTopic>
                <HomeBannerTopicIconContainer className="bg-base-text">
                  <Icon name="Package"/>
                </HomeBannerTopicIconContainer>
                Embalagem mantém o café intacto
              </HomeBannerTopic>
              <HomeBannerTopic>
                <HomeBannerTopicIconContainer>
                  <Icon name="Timer"/>
                </HomeBannerTopicIconContainer>
                Entrega rápida e rastreada
              </HomeBannerTopic>
              <HomeBannerTopic>
                <HomeBannerTopicIconContainer className="bg-purple-default">
                  <Icon name="Coffee"/>
                </HomeBannerTopicIconContainer>
                O café chega fresquinho até você
              </HomeBannerTopic>
            </ul>
          </div>
          <Image
            src="/assets/Banner.png"
            alt="Um copo branco e preto de café com grãos de café ao redor e um fundo amarelo"
            width={476}
            height={360}
            className="object-contain"
          />
        </HomeBannerSectionContainer>
        <HomeCoofeesSectionContainer>
          <HomeCoofeesSectionTitle>
            Nossos cafés
          </HomeCoofeesSectionTitle>
          <div className="flex flex-row flex-wrap gap-x-8 gap-y-10">
            {
              Object.entries(coffees).map(([coffee]) => {
                return (
                  <CoffeeCard
                    key={coffee}
                    coffee={coffee as Coffee}
                  />
                );
              })
            }
          </div>
        </HomeCoofeesSectionContainer>
      </HomeMainContainer>
    </>
  );
}