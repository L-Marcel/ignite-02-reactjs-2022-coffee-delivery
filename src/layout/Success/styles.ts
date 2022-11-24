import tw from "tw-tailwind";

export const SuccessMainContainer = tw.main`
  flex
  flex-col
  w-full
  h-full
  flex-1
  gap-7
  px-20
  py-12
`;

export const SuccessTitle = tw.h2`
  font-baloo
  font-extrabold
  text-3xl
  text-yellow-dark
`;

export const SuccessSubtitle = tw.p`
  text-xl
  font-roboto
  font-normal
  text-base-subtitle
`;

export const SuccessDeliveryInformationsListContainer = tw.div`
  p-[1px]
  flex
  flex-row
  rounded-tl-md
  h-fit
  rounded-tr-[36px]
  rounded-bl-[36px]
  rounded-br-md
  w-[32rem]
  overflow-hidden
  justify-center
  items-center
  from-yellow-default
  to-purple-default
  bg-gradient-to-r
`;

export const SuccessDeliveryInformationsList = tw.ul`
  p-10
  flex
  flex-col
  w-full
  rounded-tl-md
  rounded-tr-[36px]
  rounded-bl-[36px]
  rounded-br-md
  h-full
  gap-8
  bg-base-background
`;

export const SuccessDeliveryInformationsListItem = tw.li`
  flex
  flex-row
  gap-3
`;


export const SuccessDeliveryInformation = tw.div`
  flex
  flex-col
  gap-0
  font-roboto
  font-normal
  text-base
  leading-[1.3rem]
  text-base-text
`;

export const SuccessDeliveryInformationTopicIconContainer = tw.div`
 rounded-full
 bg-yellow-default
 p-2
 h-min
 text-base-background
`;