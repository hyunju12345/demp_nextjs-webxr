'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { XR, createXRStore, XROrigin } from '@react-three/xr';

import { Cockroach } from './components/Cockroach';
import { House } from './components/House';

const store = createXRStore();

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{
          position: [6, 2, 6],
          fov: 60,
        }}
        shadows
      >
        <XR store={store}>

          {/* XR starting position */}
          <XROrigin position={[4, 1.2, 4]} />

          {/* Background */}
          <color attach="background" args={['#1c1b19']} />

          {/* ===================== */}
          {/* LIGHTING */}
          {/* ===================== */}

          <ambientLight intensity={1.2} />

          <directionalLight
            position={[5, 10, 5]}
            intensity={2}
            castShadow
          />

          <pointLight
            position={[-4, 4, 3]}
            intensity={1.5}
            color="#ffd6a0"
          />

          <pointLight
            position={[4, 2, -4]}
            intensity={1}
            color="#ffffff"
          />

          {/* ===================== */}
          {/* HOUSE MODEL */}
          {/* ===================== */}

          <House
            position={[0, -1, 0]}
            scale={1}
            rotation={[0, 0, 0]}
          />

          {/* ===================== */}
          {/* COCKROACH */}
          {/* ===================== */}

        <Cockroach
  position={[6, -2, 1.2]}
  scale={1}
  rotation={[0, Math.PI, 0]}
/>

          {/* ===================== */}
          {/* CAMERA CONTROLS */}
          {/* ===================== */}

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            target={[0, 0, 0]}
            minDistance={0.5}
            maxDistance={30}
          />

        </XR>
      </Canvas>
    </div>
  );
}