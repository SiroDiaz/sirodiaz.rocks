import tw from 'tailwind-styled-components';

const Root = tw.div`
  flex flex-col bg-black text-white min-h-screen font-body
`;

const Main = tw.main`
  flex flex-col text-white min-h-screen w-full justify-center
`;

export { Root, Main };
