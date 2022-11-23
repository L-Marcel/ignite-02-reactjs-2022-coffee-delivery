import tw from "tw-tailwind";

export const InputNumberContainer = tw.div`
  flex
  flex-row
  justify-center
  items-center
  gap-2
  p-2
  text-base-title
  text-base
  leading-[1.4rem]
  bg-base-button
  rounded-md
`;

export const InputContainer = tw.input`
  w-full
  p-3
  h-11
  rounded-[4px]
  text-base-text
  placeholder:text-base-label
  bg-base-input
  border-[1px]
  border-base-button
  active:border-yellow-dark
  focus-visible:outline-none
  focus-visible:border-yellow-dark
`;

export const InputLabelContainer = tw.label`
  relative
  focus-visible:outline-none
`;

export const InputLabelRightMessage = tw.p`
  absolute
  right-0
  top-0
  bottom-0
  flex
  flex-row
  justify-end
  items-center
  m-3
  text-xs
  leading-3
  text-base-label
  italic
`;