import tw from "tw-tailwind";

export const CoffeeCardContainer = tw.article`
  bg-base-card
  rounded-tl-md
  rounded-tr-[3rem]
  rounded-br-md
  rounded-bl-[3rem]
  w-64
  min-h-[16rem]
  flex
  flex-col
  items-center
  p-5
  mx-1
`;

export const CoffeeTagsContainer = tw.ul`
  flex
  flex-row
  gap-1
  mt-4
`;

export const CoffeeTagContainer = tw.li`
  bg-yellow-light
  text-yellow-dark
  px-2
  py-1
  rounded-[100px]
  text-[0.625rem]
  leading-[0.8125rem]
  font-bold
  uppercase
`;

export const CoffeeDescriptionContainer = tw.div`
  mt-5
  flex
  flex-col
  gap-2
  text-center
`;

export const CoffeeDescriptionTitle = tw.h3`
  text-xl
  font-bold
  font-baloo
  leading-[1.625rem]
  text-base-subtitle
`;

export const CoffeeDescriptionContent = tw.p`
  font-normal
  font-roboto
  text-sm
  leading-[1.125rem]
  text-base-label
`;

export const CoffeeCardFooterContainer = tw.footer`
  mt-8
  flex
  flex-row
  justify-between
  items-center
`;

export const CoffeeCardFooterPrice = tw.p`
  text-base-text
  font-roboto
  font-normal
  text-sm
  leading-[1.125rem]
`;

export const CoffeeCardFooterPriceValue = tw.span`
  text-base-text
  font-baloo
  font-extrabold
  text-2xl
  leading-[1.9375rem]
`;

export const CoffeeCartItemContainer = tw.article`
  px-1
  py-2
  bg-base-card
  flex
  flex-row
  justify-between
  h-20
`;

export const CoffeeCartItemTitle = tw.h4`
  font-normal
  font-roboto
  text-base
  text-base-subtitle
  leading-[1.3rem]
`;

export const CoffeeCartItemPrice = tw.p`
  font-bold
  font-roboto
  text-base
  text-base-text
  leading-[1.3rem]
`;

export const CoffeeCartListPriceItem = tw.li`
  flex
  flex-row
  justify-between
  coffee-cart-list-price-item
`;