import tw from "tw-tailwind";

export const HomeMainContainer = tw.main`
  flex
  flex-col
  w-full
  h-full
  min-h-screen
  flex-1
  gap-4
  justify-center
  items-center
`;

export const HomeBannerSectionContainer = tw.section`
  px-20
  py-24
  w-full
  flex
  flex-row
  gap-14
  bg-[url('/assets/BannerBackground.png')]
`;

export const HomeBannerTitle = tw.h1`
  font-baloo
  leading-[3.875rem]
  font-extrabold
  text-5xl
  text-base-title
`;

export const HomeBannerSubtitle = tw.h5`
  font-roboto
  text-xl
  font-normal
  text-base-subtitle
`;

export const HomeBannerTopic = tw.li`
  flex
  flex-row
  gap-3
  items-center
  justify-start
  font-roboto
  font-normal
  text-base
  text-base-text
`;

export const HomeBannerTopicIconContainer = tw.div`
 rounded-full
 bg-yellow-default
 p-2
 h-min
 text-base-background
`;

export const HomeCoofeesSectionContainer = tw.section`
  flex
  flex-col
  gap-16
  px-20
  pb-24
  w-full
`;

export const HomeCoofeesSectionTitle = tw.h3`
  font-baloo
  font-extrabold
  text-[2rem]
  leading-[2.625rem]
  text-base-subtitle
`;