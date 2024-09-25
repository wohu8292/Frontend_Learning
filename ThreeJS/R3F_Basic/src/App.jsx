import { BoxGeometry } from 'three'
import './App.css'
import {Canvas, useFrame} from "@react-three/fiber"
import { useRef } from 'react'

const Cube = ({position, size, color}) => {
  const ref = useRef()
  // deltat is difference in time between current frame and last frame
  useFrame((state, delta)=>{
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta * 2
      ref.current.position.z = Math.sin(state.clock.elapsedTime)*2
      console.log(state)
  })

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

const App = () => {
  return (
      <Canvas>
        {/* light */}
        <directionalLight position={[0,0,2]} intensity={0.9}/>
        {/* globally illuminate equally */}
        <ambientLight />

        {/* <group position={[0,-1,0]}> */}
          {/* position: [w,h,d], args: [] */}
          {/* <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
          <Cube position={[-1,0,0]} color={"hotpink"} size={[1,1,1]}/>
          <Cube position={[-1,2,0]} color={"blue"} size={[1,1,1]}/>
          <Cube position={[1,2,0]} color={"yellow"} size={[1,1,1]}/> */}
        {/* </group> */}

        <Cube position={[0,0,0]} size={[1,1,1]} color={"orange"} />
      </Canvas>
  )
}

export default App
