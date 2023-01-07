import { ThemeContext } from '../../../context/ThemeContext'
import Image from 'next/image'
import { useContext } from 'react'

export default function OpenSourceSection() {
  const { theme } = useContext(ThemeContext)
  return (
    <section className="flex flex-col relative mb-10">
      <div className="absolute inset-0 left-0 bottom-0 z-10">
        <Image
          src="/vectors/figure-open-source.svg"
          width={254}
          height={485}
          alt="Open Source"
          className={`absolute inset-0 left-0 bottom-0 ${
            theme === 'light' ? 'invert' : ''
          }`}
        />
      </div>

      <div className="container flex flex-col mx-auto z-20 lg:px-16 lg:mt-0 justify-start">
        <div className="lg:space-x-5 flex">
          <div className="w-full flex justify-center flex-col px-3 lg:px-0">
            <div className="mb-7">
              <h2
                id="opensource"
                className="section-title font-bold text-4xl lg:text-5xl xl:text-7xl"
              >
                Open Source
              </h2>
            </div>

            <div className="mt-5">
              <p className="lg:max-w-[60%]">
                A veces me gusta aportar código open source que necesito para
                alguno de mis proyectos o para los empresas y particulares para
                las que he trabajado. Me siento más cómodo aportando en código
                backend, dado mi mayor interés por esa área del desarrollo.
                <br />
                <br />
                Si existe alguna librería o paquete que falla por algún lado
                ayudo notificando y, siempre que puedo, aportando la solución al
                error con los tests que sean necesarios.
                <br />
                <br />
                Me encantaría poder aportar más la verdad. Hay proyectos nuevos
                que son muy buenos sobre los que me gustaría aportar añadiendo
                integraciones o características nuevas (o incluso el
                mantenimiento de las mismas). Estos son los proyectos que he
                iniciado y soy el principal mantenedor:
              </p>
            </div>

            <div className="flex mt-5 lg:ml-10">
              <ul className="list-none">
                <li className="mb-3">
                  <a
                    href="https://github.com/SiroDiaz/sphinxql"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-start space-x-3"
                  >
                    <div className="text-xl font-bold dark:text-white">
                      sphinxql
                    </div>
                    <div className="text-xl" style={{ color: '#2B7489' }}>
                      SphinxQL query builder for Node.js.
                    </div>
                  </a>
                </li>

                <li className="mb-3">
                  <a
                    href="https://github.com/SiroDiaz/Base62"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-start space-x-3"
                  >
                    <div className="text-xl font-bold dark:text-white">
                      Base62
                    </div>
                    <div className="text-xl" style={{ color: '#4F5D95' }}>
                      PHP Base62 encoder and decorder for big numbers.
                    </div>
                  </a>
                </li>

                <li className="mb-3">
                  <a
                    href="https://github.com/SiroDiaz/laravel-redirection"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-start space-x-3"
                  >
                    <div className="text-xl font-bold dark:text-white">
                      laravel-redirection
                    </div>
                    <div className="text-xl" style={{ color: '#4F5D95' }}>
                      Laravel 8.x and 9.x package to manage URL redirections.
                    </div>
                  </a>
                </li>

                <li className="mb-3">
                  <a
                    href="https://github.com/SiroDiaz/php-klaviyo-api"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-start space-x-3"
                  >
                    <div className="text-xl font-bold dark:text-white">
                      php-klaviyo-api
                    </div>
                    <div className="text-xl" style={{ color: '#4F5D95' }}>
                      Low level but elegant Klaviyo full API wrapper.
                    </div>
                  </a>
                </li>

                <li className="mb-3">
                  <a
                    href="https://github.com/SiroDiaz/manticore-migration"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-start space-x-3"
                  >
                    <div className="text-xl font-bold dark:text-white">
                      manticore-migration
                    </div>
                    <div className="text-xl" style={{ color: '#4F5D95' }}>
                      Manticore-Migration is a CLI tool to keep sync your
                      Manticore index schemas.
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
