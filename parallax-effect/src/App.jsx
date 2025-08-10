import greenLogo from '/BC tech academy mockup.png'
import orangeLogo from '/BC_tech_academy_logo-no_bg.png'
import land from '/land.jfif'
import './App.css'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
    const ref = useRef();

  return (
    <main>
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${greenLogo})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={orangeLogo} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h1>Welcome to my website</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Welcome Y'all!</h2>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}

export default App
