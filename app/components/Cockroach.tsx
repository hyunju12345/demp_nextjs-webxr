'use client';

import { useGLTF } from '@react-three/drei';

type ModelProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
};

export function Cockroach(props: ModelProps) {
  const { scene } = useGLTF('/cr.glb');

  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/cr.glb');