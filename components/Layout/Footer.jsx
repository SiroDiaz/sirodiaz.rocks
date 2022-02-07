import Image from 'next/image';
import { MainFooter } from './Footer.styled';

export function Footer() {
  return (
    <MainFooter>
      <a
        className="my-5 text-neutral-900 dark:text-white"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          <Image className="dark:invert" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </MainFooter>
  )
}
