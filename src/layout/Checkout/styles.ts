import tw from "tw-tailwind";

export const CheckoutFormContainer = tw.form`
  flex
  flex-row
  w-full
  h-full
  min-h-screen
  flex-1
  gap-8
  justify-between
  px-20
  pt-8
  pb-24
`;

export const CheckoutSectionTitle = tw.legend`
  font-baloo
  font-bold
  text-lg
  leading-[1.4375rem]
  text-base-subtitle
`;

export const CheckoutFieldTitle = tw.h4`
  font-roboto
  font-normal
  text-base
  leading-[1.3rem]
  text-base-subtitle
`;

export const CheckoutFieldSubtitle = tw.p`
  font-roboto
  font-normal
  text-sm
  text-base-text
`;

export const CheckoutFieldCard = tw.div`
  bg-base-card
  flex
  flex-col
  h-fit
  w-full
  rounded-md
  p-10
  mt-4
`;