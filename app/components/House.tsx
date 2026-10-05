'use client';

import { useGLTF } from '@react-three/drei';

type ModelProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
};

export function House(props: ModelProps) {
  const { scene } = useGLTF('/fixed_lowpoly_cockroach_house.glb');

  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/fixed_lowpoly_cockroach_house.glb');