import { CutCornerButton } from "../components/CutCornerButton"


export const HeroSection = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className='container'>
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl text-center mt-4">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl mt-6 text-zinc-400">
          Blockforge is pioonering smart contract integrity with cutting-edge data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="">
            Get Started
          </CutCornerButton>
        </div>
        <div className="inline-flex mt-24 relative z-0">
          <img
            src="/assets/images/icosahedron.png"
            alt="Icosahedron"
            className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
          />
          <img 
            src="/assets/images/icosahedron.png" 
            alt="Icosahedron" 
          />
        </div>
      </div>
    </section>
  )
}

