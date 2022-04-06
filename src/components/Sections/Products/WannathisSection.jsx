import { Button } from "@Components/Common/Button.styled";
import Image from "next/image";

export default function WannathisSection() {
  return (
    <section className="flex flex-col min-h-screen relative">
      <div className="container flex flex-col mx-auto lg:px-16 mt-24 lg:mt-0 justify-start">
        <div className="lg:space-x-5 flex">
          <div className="w-full flex justify-center flex-col px-3 lg:px-0">
            <div className="mb-7">
              <h2
                id="products"
                className="section-title font-bold text-4xl lg:text-5xl"
              >
                Productos Activos
              </h2>
            </div>

            <div>
              <Image src="/img/icon-wannathis-original.svg" width={96} height={96} alt="Wannathis" />
              <h3 className="font-bold text-3xl lg:text-4xl">Wannathis</h3>
              <p className="lg:max-w-[60%]">Plataforma social de listas de deseos para evitar devoluciones de regalos y acertar siempre con lo que quieren tus seres queridos (y ellos acierten contigo).</p>
              <div className="flex flex-row justify-center lg:justify-start mt-7 space-x-5">
                <Button href="https://wannathis.co" target="_blank" rel="noreferrer">
                  Visitar
                </Button>

                <Button $register href="https://wannathis.co/auth/register" target="_blank" rel="noreferrer">
                  Registrarme
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-1 mt-10 mb-20 overflow-hidden z-10">
        
        <div className="relative mx-auto pb-24 lg:-right-20 w-full flex justify-end items-end">
          <div className="h-auto drop-shadow-2xl">
            <Image placeholder="empty" src="/img/screenshot-profile-2-borderless-optimized.jpg" width={1175} height={650} className="lg:rounded-bl-2xl lg:rounded-tl-2xl" alt="Wannathis" />
          </div>
        </div>
      </div>
    </section>
  );
}
