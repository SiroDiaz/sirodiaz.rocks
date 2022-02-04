import tw from 'tailwind-styled-components';

//const Button = tw.button`
//    ${(p) => (p.$primary ? "bg-indigo-600" : "bg-indigo-300")}
//`

const Root = tw.div`
  flex flex-col bg-black text-white min-h-screen font-body
`;

export { Root };
