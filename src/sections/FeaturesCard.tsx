



export const FeaturesCard = () => {
    return (
      <section className="py-24">
        <div className="container">
          <h2 className="font-heading font-black text-4xl text-center">
            Discover the future of blockchain with blockforce
          </h2>
          
          {/* card */}
          <div className="mt-36">
            <div className="relative z-0 p-8 max-w-xs group">
              {/* Borde fuchsia */}
              <div className="absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10"></div>
              
              {/* Gradiente que simula el borde de la imagen */}
              {/* 22deg = gradiente se inicia en la esquina superior derecha y termina en la esquina inferior izquierda */}
              {/* mantendrá el color transparent hasta los primeros 40px, despues cambia abruptamente a negro y será visible hasta el final */}
              <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
              
              <div className="flex justify-center -mt-28">
                <div className="inline-flex relative">
                  <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                  <img 
                    src="/assets/images/pill.png" 
                    alt="pill" 
                    className="size-40 group-hover:-translate-y-6 transition duration-300 "
                  />
                </div>
              </div>

              <h3 className="font-heading font-black text-3xl mt-12">
                Revolutionary Blockchain API
              </h3>
              <p className="text-lg text-zinc-400 mt-4">
                Effortessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.
              </p>

              <div className="flex justify-between mt-12">
                <button className="text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500">
                  Learn More
                </button>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="size-8 text-zinc-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
              {[...new Array(4)].fill(0).map((_, i) => (
                <div 
                  key={i}
                  className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"  
                >
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }