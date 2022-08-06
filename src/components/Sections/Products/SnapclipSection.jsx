import { useContext } from "react";
import { Button } from "@Components/Common/Button.styled";
import { ThemeContext } from "../../../context/ThemeContext";
import Image from "next/image";
import ImageZoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export default function SnapclipSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="flex flex-col relative lg:min-h-screen">
      <div className="container flex flex-col mx-auto lg:px-16 lg:mt-0 justify-start">
          <div className="w-full flex justify-center flex-col px-3 lg:px-0">
            <div>
              <Image className={`${theme === 'light' ? 'invert' : ''}`} src="/img/icon-snapclip.svg" width={96} height={96} alt="Snapclip.tv" />
              <h3 className="font-bold text-3xl lg:text-4xl">Snapclip.tv</h3>
              <p className="lg:max-w-[60%]">Envía y guarda fragmentos y resúmenes de videos alojados en plataformas como YouTube, Twitch, Vimeo o DailyMotion. Una herramienta esencial para tu día a día como estudiante o como usuario casual.</p>
              <div className="flex flex-row justify-center lg:justify-start mt-7 space-x-5">
                <Button href="https://snapclip.tv" target="_blank" rel="noreferrer">
                  Visitar
                </Button>
              </div>
            </div>
          </div>
      </div>

      <div className="relative w-full flex flex-1 mt-10 z-10 mb-20 bg-neutral-200 dark:bg-neutral-900">
        <div className="relative w-full flex justify-center items-end space-x-7 py-10">
          <div className="flex flex-col justify-center items-center">
            <span className="flex text-5xl font-bold dark:text-white mb-5">1</span>
            <ImageZoom>
              <Image placeholder="empty" src="/img/snapclip-step-1.png" height={694} width={342} className="flex drop-shadow-xl" alt="Snapclip.tv" />
            </ImageZoom>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="flex text-5xl font-bold mb-5">2</span>
            <ImageZoom>
              <Image placeholder="empty" src="/img/snapclip-step-2.png" height={694} width={342} className="flex drop-shadow-xl" alt="Snapclip.tv" />
            </ImageZoom>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="flex text-5xl font-bold mb-5">3</span>
            <ImageZoom>
              <Image placeholder="empty" src="/img/snapclip-step-3.png" height={694} width={342} className="flex drop-shadow-xl" alt="Snapclip.tv" />
            </ImageZoom>
          </div>
        </div>
      </div>
    </section>
  )
}