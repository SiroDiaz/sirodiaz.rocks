import Image from 'next/image';
import {
  HeaderLink,
  NavbarBrand,
  NavbarContainer,
  NavbarInnerContainer,
} from './Navbar.styled';

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <NavbarBrand>
          <Image src="/site-icons/favicon-32x32.png" className="rounded-full" width={32} height={32} alt="Siro Díaz Palazón" />
          <HeaderLink>
            Siro Díaz Palazón
          </HeaderLink>
        </NavbarBrand>

        <div className="space-x-4">
          <HeaderLink href="#products">Productos</HeaderLink>
          <HeaderLink href="#opensource">Open Source</HeaderLink>
          {/*<HeaderLink href="#">Dev Blog</HeaderLink>*/}
          <HeaderLink href="#aboutme">Sobre mí</HeaderLink>
          
        </div>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}