import { ThemeContext } from "../../../context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

export default function HeroSection() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className='flex flex-col min-h-screen md:flex-row'>
      <div className="absolute z-10 top-0 left-0">
        <Image src="/vectors/figure-hero.svg" width="338" height="382" alt="Figure" />
      </div>

      <div className="container flex flex-col mx-auto lg:mx-32 z-20 mt-36 lg:mt-32 justify-center items-center">
        <div className="mx-auto lg:space-x-5 flex flex-col-reverse lg:flex-row">
          <div className="w-full flex justify-center flex-col lg:max-w-[50%] px-3">
            <div className='mb-7'>
              <span className="dark:text-white font-bold text-5xl">
                Hola,
              </span>
            </div>
            <div className="inline-block">
              <span className="dark:text-white text-3xl">
                <span>Soy </span>
                <span className="text-red-400"><strong>Siro Díaz</strong></span>, emprendedor de productos digitales y desarrollador de software. Aprendo sobre:
              </span>
            </div>

            <div className="mt-16">
              <p className="text-red-400 font-bold text-3xl">Software, SEO, Growth hacking</p>
            </div>

            <div className="mt-16 flex flex-row space-x-5">
              <div className='flex flex-col'>
                <p className="text-lg">Edad</p>
                <p className="text-xl font-bold text-red-400">28</p>
              </div>

              <div className='flex flex-col'>
                <p className="text-lg">Soy de</p>
                <p className="text-xl font-bold text-red-400">Murcia, España</p>
              </div>

              <div className='flex flex-col'>
                <p className="text-lg">Lenguajes favoritos</p>
                <p className="text-xl font-bold text-red-400">PHP y JS</p>
              </div>
            </div>
          </div>
          
          <div className="w-full flex justify-center lg:max-w-[50%]">
            <figure className='max-w-[100%]'>
              <Image className="rounded-bl-full rounded-br-full mx-auto" src="/img/my-profile-hd.png" width="383" height="542" alt="Figure" />  
            </figure>
          </div>
        </div>

        <div className="pt-32 flex justify-center items-center space-x-4">
          <a href="https://github.com/SiroDiaz" target="_blank" rel="noreferrer">
            <Image className={`${theme === 'light' ? 'invert' : ''}`} src="/icons/github.svg" width={24} height={24} alt="Github SiroDiaz" target="_blank" rel="noreferrer" />
          </a>
          <a href="https://www.linkedin.com/in/sirodiaz/" target="_blank" rel="noreferrer">
            <Image className={`${theme === 'light' ? 'invert' : ''}`} src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn Siro Díaz Palazón" />
          </a>
          <a href="https://twitter.com/Siro_Diaz" target="_blank" rel="noreferrer">
            <Image className={`${theme === 'light' ? 'invert' : ''}`} src="/icons/twitter.svg" width={24} height={24} alt="Twitter Siro_Diaz" />
          </a>
        </div>
      </div>
    </section>
  )
}