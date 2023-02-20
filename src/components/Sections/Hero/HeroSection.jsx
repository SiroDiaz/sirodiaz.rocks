import { ThemeContext } from '@Context/ThemeContext'
import Image from 'next/image'
import { useContext } from 'react'

export default function HeroSection() {
  const { theme } = useContext(ThemeContext)

  return (
    <section className="flex flex-col min-h-screen md:flex-row">
      <div className="container flex flex-col mx-auto lg:mx-32 z-20 justify-center items-center">
        <div className="mx-auto lg:space-x-5 flex flex-col lg:flex-row">
          <div className="w-full top-10 max-w-[40%] flex justify-center lg:max-w-[40%]">
            <figure className="max-w-[480px]">
              <Image
                className="mx-auto rounded-full"
                src="/img/siro-diaz.png"
                width="800"
                height="800"
                alt="Siro Díaz Palazón"
              />
            </figure>
          </div>

          <div className="relative w-full flex justify-center flex-col lg:max-w-[60%] px-3">
            <div className="mb-7">
              <span className="dark:text-white font-bold text-6xl">Hola,</span>
            </div>
            <div className="inline-block">
              <span className="dark:text-white font-semibold text-4xl">
                <span>
                  Soy Siro Díaz, emprendedor de productos digitales y
                  desarrollador de software.
                </span>
              </span>
            </div>

            <div className="mt-16 flex flex-row space-x-5">
              <div className="flex flex-col gap-y-3">
                <p className="text-lg">Creo cosas con</p>
                <div className="flex flex-row gap-3">
                  <Image
                    className={`${theme === 'light' ? '' : 'invert'}`}
                    src="/icons/brand-php.svg"
                    width={48}
                    height={48}
                    alt="PHP"
                  />

                  <Image
                    className={`${theme === 'light' ? '' : 'invert'}`}
                    src="/icons/brand-typescript.svg"
                    width={48}
                    height={48}
                    alt="Typescript"
                  />

                  <Image
                    className={`${theme === 'light' ? '' : 'invert'}`}
                    src="/icons/brand-python.svg"
                    width={48}
                    height={48}
                    alt="Typescript"
                  />

                  <Image
                    className={`${theme === 'light' ? '' : 'invert'}`}
                    src="/icons/brand-nextjs.svg"
                    width={48}
                    height={48}
                    alt="Typescript"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-32 flex justify-center items-center space-x-4"></div>
      </div>
    </section>
  )
}
