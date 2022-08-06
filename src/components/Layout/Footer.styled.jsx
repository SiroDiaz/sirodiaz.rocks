import Image from 'next/image';
import tw from 'tailwind-styled-components';

export const MainFooter = tw.footer`
  flex
  flex-col
  items-center
  justify-center
`;

export const FooterCredits = tw.div`
  flex
  my-8
  text-neutral-900
  justify-center
  items-center

  dark:text-white
`;

export const Credits = tw.div`
  flex
  items-center
  gap-4
`;

export const ImageCredits = tw(Image)`
  d-block
  rounded-full
`;