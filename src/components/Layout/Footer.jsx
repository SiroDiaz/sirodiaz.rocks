import Image from 'next/image'
import {
  Credits,
  FooterCredits,
  ImageCredits,
  MainFooter,
} from './Footer.styled'

export function Footer() {
  return (
    <MainFooter className="bg-neutral-100 dark:bg-neutral-900">
      <FooterCredits>
        <Credits>
          <span>Crafted with ❤️ by Siro</span>
          <ImageCredits
            src="/img/siro-diaz-squared.png"
            className="rounded-full"
            alt="Logo de sirodiaz.rocks"
            width={32}
            height={32}
          />
        </Credits>
      </FooterCredits>
    </MainFooter>
  )
}
