import tw from 'tailwind-styled-components';

const Root = tw.div`
  relative flex flex-col bg-white dark:bg-black transition duration-300 dark:text-white min-h-screen font-body
`;

const Main = tw.main`
  flex flex-col dark:text-white min-h-screen w-full justify-center
`;

export { Root, Main };
