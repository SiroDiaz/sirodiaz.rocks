import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { FiMoon, FiSun } from 'react-icons/fi'
import {
  HeaderLink,
  NavbarBrand,
  NavbarContainer,
  NavbarInnerContainer,
} from './Navbar.styled'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <NavbarBrand>
          <Image
            src="/site-icons/favicon-32x32.png"
            className="rounded-full"
            width={32}
            height={32}
            alt="Siro Díaz Palazón"
          />
          <HeaderLink>Siro Díaz Palazón</HeaderLink>
        </NavbarBrand>

        <div className="flex justify-center space-x-4">
          <HeaderLink href="#products">Productos</HeaderLink>
          <HeaderLink href="#opensource">Open Source</HeaderLink>
          {/*<HeaderLink href="#">Dev Blog</HeaderLink>*/}
          <HeaderLink href="#aboutme">Sobre mí</HeaderLink>
          <span
            onClick={toggleTheme}
            className="inline-flex justify-center items-center hover:cursor-pointer"
          >
            {theme === 'light' ? (
              <FiSun className="text-2xl" />
            ) : (
              <FiMoon color={`${theme === 'dark' ? '#fff' : '#010101'}`} />
            )}
          </span>
        </div>
      </NavbarInnerContainer>
    </NavbarContainer>
  )
}
