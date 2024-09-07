import { CutCornerButton } from "../components/CutCornerButton"


export const HeroSection = () => {
  return (
    <section>
      <div className='container'>
        <p>Introducing Blockforge</p>
        <h1>The Future of Blockchain is Here.</h1>
        <p>Blockforge is pioonering smart contract integrity with cutting-edge data solutions.</p>
        <CutCornerButton>Get Started</CutCornerButton>
        <img src="/assets/images/icosahedron.png" alt="Icosahedron" />
      </div>
    </section>
  )
}

