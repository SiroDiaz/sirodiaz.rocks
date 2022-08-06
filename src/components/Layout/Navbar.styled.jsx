import tw from 'tailwind-styled-components';

export const NavbarContainer = tw.nav`
  sticky
  w-full
  flex
  flex-row
  items-center
  px-4
  py-3
  top-0
  left-0
  z-30
  blur-8
  bg-neutral-100
  transition
  duration-300
  bg-opacity-60
  backdrop-blur-sm
  
  dark:bg-neutral-800
  dark:bg-opacity-60
  dark:text-white
`;

export const NavbarInnerContainer = tw.div`
  container
  mx-auto
  flex
  flex-col
  justify-between
  items-center
  px-4
  py-3

  lg:flex-row
`;

export const NavbarBrand = tw.div`
  flex
  space-x-3
  justify-center
  items-center
  mb-4
  
  lg:mb-0
`;

export const HeaderLink = tw.a`
  font-semibold
  text-sm
  lg:text-normal
  text-neutral-800
  dark:text-white
`;