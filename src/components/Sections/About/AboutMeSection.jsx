import { ExternalLink } from '@Components/Common/ExternalLink'
import { ThemeContext } from '../../../context/ThemeContext'
import Image from 'next/image'
import { useContext } from 'react'

export default function AboutMeSection() {
  const { theme } = useContext(ThemeContext)
  return (
    <section className="flex flex-col min-h-screen relative">
      <div className="container flex flex-col mx-auto z-20 lg:px-16 lg:mt-0 justify-start">
        <div className="lg:space-x-5 flex">
          <div className="w-full flex justify-center flex-col lg:px-0">
            <div className="mb-16">
              <h2
                id="aboutme"
                className="section-title font-bold text-4xl lg:text-5xl xl:text-7xl"
              >
                Sobre mí
              </h2>
            </div>

            <div className="flex flex-col mt-5 lg:flex-row lg:ml-10 space-x-5 mb-36">
              <div className="flex flex-1 max-h-[640px] w-full max-w-[640px] mx-auto mb-5">
                <div className="block">
                  <Image
                    placeholder="empty"
                    src="/img/profile-2.jpg"
                    width={640}
                    height={640}
                    alt="imagen de perfil"
                  />
                </div>
              </div>
              <div className="flex flex-1 px-3">
                <p>
                  Me llamo Siro Díaz Palazón, soy un desarrollador de software y
                  un apasionado de la tecnología. Vivo actualmente en la ciudad
                  de Murcia (España).
                  <br />
                  <br />
                  Me encantan los deportes de raqueta, especialmente pádel y
                  tenis, este último lo practiqué desde los 6 añitos hasta que
                  decidí decantarme por la informática. Rondaría los 17 años de
                  edad cuando pasó eso.
                  <br />
                  <br />
                  Desde entonces mi vida ha sido estudiar/aprender cosas
                  relacionadas con el mundo de la web que fue lo que me
                  deslumbró una vez llegó la conexión a Internet a casa.
                  <br />
                  <br />
                  Entré a estudiar el grado en ingeniería informática en la
                  Universidad de Murcia allá por el 2012 y abandoné por tercer
                  curso.
                  <br />
                  <br />
                  Abandonar no significaba para mí el tener que renunciar a
                  poder trabajar de lo que me gusta.
                  <br />
                  Ya mucho antes de abandonar la Universidad estaba trabajando
                  de prácticas para la misma Universidad de Murcia y gracias a
                  ello conseguí hacer un proyecto para la Fundación Telefónica.
                  He trabajado como autónomo para proyectos que me han supuesto
                  un reto de formación en nuevas áreas como es la de los motores
                  de búsqueda, scraping, etc.
                  <br />
                  Todo esto lo compaginaba con el desarrollo de mis propias
                  ideas, que con mi perseverancia siempre he finalizado. Si se
                  trata de algo que me gusta y en lo que creo, voy hasta el
                  final con ello. Hasta hace poco, he estado trabajando por
                  segunda vez en una startup pequeña de ecommerce en mi ciudad
                  (Murcia). En mis dos etapas he aprendido cosas para aplicar a
                  mis proyectos: separar lo relevante de lo irrelevante,
                  mentalidad LEAN, SEO y growth hacking.
                  <br />
                  <br />
                  Si quieres saber mi stack tecnológico personal, con el que
                  trabajo o he trabajado anteriormente, puedes echar un vistazo
                  a mi{' '}
                  <ExternalLink
                    target="_blank"
                    href="https://stackshare.io/SiroDiaz/my-stack"
                    rel="noreferrer"
                  >
                    perfil de StackShare
                  </ExternalLink>
                  .
                </p>
              </div>
            </div>

            <div>
              <h2 className="section-title font-bold text-center text-4xl lg:text-5xl xl:text-7xl">
                ¿Conectamos y Hablamos?
              </h2>
            </div>

            <div className="mt-32 mb-32">
              <div className="flex justify-center items-center space-x-4">
                <a
                  href="https://github.com/SiroDiaz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className={`${theme === 'light' ? 'invert' : ''}`}
                    src="/icons/github.svg"
                    width={36}
                    height={36}
                    alt="Github SiroDiaz"
                    target="_blank"
                    rel="noreferrer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/sirodiaz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className={`${theme === 'light' ? 'invert' : ''}`}
                    src="/icons/linkedin.svg"
                    width={36}
                    height={36}
                    alt="LinkedIn Siro Díaz Palazón"
                  />
                </a>
                <a
                  href="https://twitter.com/Siro_Diaz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className={`${theme === 'light' ? 'invert' : ''}`}
                    src="/icons/twitter.svg"
                    width={36}
                    height={36}
                    alt="Twitter Siro_Diaz"
                  />
                </a>
              </div>
              <div className="flex justify-center items-center mt-5">
                <span className="border-4 rounded-full border-black dark:border-white bg-transparent w-3 h-3" />
              </div>
              <div className="mt-5 text-center">
                <a href="mailto:sirodiaz93@gmail.com">sirodiaz93@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
