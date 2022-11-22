import tw from "tw-tailwind";

export const HeaderContainer = tw.header`
  px-40
  py-8
  flex
  flex-row
  w-full
  justify-between
`;

export const HeaderLocation = tw.div`
  flex
  flex-row
  justify-center
  items-center
  p-2
  pr-3
  gap-1
  max-h-[2.375rem]
  bg-purple-light
  rounded-md
  text-purple-dark
  first:text-purple-default
`;

export const HeaderLocationText = tw.p`
  text-sm
  leading-[1.125rem]
  font-roboto

`;