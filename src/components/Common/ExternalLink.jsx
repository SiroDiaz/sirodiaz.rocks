import tw from 'tailwind-styled-components';

export const ExternalLink = tw.a`
  rounded-lg px-1 py-1 font-bold text-white bg-neutral-700 hover:bg-red-400 focus:ring transition-all duration-300
  hover:shadow-lg focus:shadow-outline-blue
  
  ${(p) => (p.$register ? 'bg-indigo-600 hover:bg-indigo-300' : '')}
`;