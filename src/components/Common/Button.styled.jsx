import tw from 'tailwind-styled-components'

export const Button = tw.a`
  rounded-lg px-6 py-3 font-bold text-white bg-neutral-700 hover:bg-neutral-900 focus:ring transition-all duration-300
  hover:shadow-lg focus:shadow-outline-blue
  
  ${(p) => (p.$register ? 'bg-indigo-600 hover:bg-indigo-300' : '')}
`
