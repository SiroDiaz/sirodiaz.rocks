import { Button } from '@Components/Common/Button.styled'
import Image from 'next/image'

export default function AffiliationToolsSection() {
  return (
    <section className="flex flex-col relative lg:min-h-screen">
      <div className="container flex flex-col mx-auto lg:px-16 mt-24 lg:mt-0 justify-start">
        <div className="lg:space-x-5 flex">
          <div className="w-full flex justify-center flex-col px-3 lg:px-0">
            <div>
              <Image
                className="rounded-2xl dark:bg-[#f1f161]"
                src="/img/icon-affiliation-tools.svg"
                width={96}
                height={96}
                alt="Affiliation Tools"
              />
              <h3 className="font-bold text-3xl lg:text-4xl">
                Affiliation Tools
              </h3>
              <p className="lg:max-w-[60%]">
                Genera enlaces de afiliados con la mayoría de programas de
                afiliados como Amazon, Aliexpress, Etsy, Decathlon, etc...
                Mientras estás navegando ¡Es gratis! y te ayudará a generar
                ingresos más fácilmente, como si tuvieras SiteStripe de Amazon
                pero para todas las tiendas que quieras.
              </p>
              <div className="flex flex-row justify-center lg:justify-start mt-7 space-x-5">
                <Button href="https://affiliation.tools" target="_blank">
                  Visitar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-1 mt-10 mb-20 overflow-hidden z-10">
        <div className="relative mx-auto pb-24 w-full flex justify-center items-center">
          <div className="min-h-[380px] h-full drop-shadow-2xl w-full max-w-[1278px] relative lg:min-h-[620px]">
            <Image
              fill
              placeholder="empty"
              src="/img/affiliation.tools-screenshot.png"
              className="lg:rounded-bl-2xl lg:rounded-tl-2xl object-contain"
              alt="Wannathis"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
