import { motion, useScroll, useTransform } from "framer-motion"
import { Circle } from "../components/Circle"
import { CutCornerButton } from "../components/CutCornerButton"
import { Hexagon } from "../components/Hexagon"
import { useRef } from "react"


export const HeroSection = () => {

  const icosahedronRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress } = useScroll({ // Monitoriza el progreso de desplazamiento del la ref
    target: icosahedronRef,
    offset: [
      'start end', // La animación cuando el elemento empiece a aparecer (cuando la parte superior del elemento coincida con la parte inferior de la ventana)
      'end start'  // La animación terminará  cuando el elemento deje de estar visible (cuando la parte inferior del elemento coincida con la parte superior de la ventana )
    ]
  });

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: [
      'start end',
      'end start'
    ]
  });

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: [
      'start end',
      'end start'
    ]
  });

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: [
      'start end',
      'end start'
    ]
  });

  const icosahedronRotate = useTransform( // UseTransform tranforma el scrollYProgress en otro valor
    scrollYProgress,
    [0, 1],     // Cuando scrollYProgress es 0 (cuando el usuario no ha comenzado a desplazarse), la rotación será 30 grados.
    [30, -45]   // Cuando scrollYProgress es 1 (cuando el usuario ha desplazado completamente la sección), la rotación será -45 grados.
  ); 

  const cubeRotate = useTransform( cubeScrollYProgress,[0, 1], [100, -45]);
  const torusRotate = useTransform( torusScrollYProgress,[0, 1], [20, -20]);
  const cuboidRotate = useTransform( cuboidScrollYProgress,[0, 1], [20, -20]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className='container'>
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
          Blockforge is pioonering smart contract integrity with cutting-edge data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="">
            Get Started
          </CutCornerButton>
        </div>

        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon 
                className="size-[1100px]" 
                size={1100}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon 
                className="size-[1800px]" 
                size={1800} 
                duration={60}
                reverse
              />
            </div>
            {/* Cube */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]" animate>
                <motion.img 
                  src="/assets/images/cube.png"
                  alt="Cube"
                  className="size-[140px]"
                  ref={cubeRef}
                  style={{
                    rotate: cubeRotate
                  }}
                />
              </Circle>  
            </div>
            {/* Cuboid */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]" animate>
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt="Cuboid"
                  className="size-[140px]"
                  ref={cuboidRef}
                  style={{
                    rotate: cuboidRotate
                  }}
                />
              </Circle>
            </div>
            {/* Torus */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <motion.img
                  src="/assets/images/torus.png"
                  alt="Torus"
                  className="size-[140px]"
                  ref={torusRef}
                  style={{
                    rotate: torusRotate
                  }}
                />
              </Circle>
            </div>
            {/* Icosahedron */}
            <motion.div 
              className="inline-flex" 
              ref={icosahedronRef}
              style={{
                rotate: icosahedronRotate
              }}  
            >
              <img
                src="/assets/images/icosahedron.png"
                alt="Icosahedron"
                className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
              />
              <img 
                src="/assets/images/icosahedron.png" 
                alt="Icosahedron" 
                className="w-[500px]"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">Scroll to learn more</p>
        </div>

      </div>
    </section>
  )
}

