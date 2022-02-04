import tw from 'tailwind-styled-components';

export const NavbarContainer = tw.nav`
  w-full flex flex-row items-center px-4 py-3 absolute top-0 left-0 z-30
`;

export const NavbarInnerContainer = tw.div`
  container mx-auto flex flex-col space-between lg:flex-row justify-between items-center px-4 py-3
`;

export const NavbarBrand = tw.div`
  flex space-x-3 justify-center items-center mb-4 lg:mb-0
`;

export const HeaderLink = tw.a`
  font-semibold
  text-sm
  lg:text-normal
`;