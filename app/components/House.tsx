'use client';

import { useGLTF } from '@react-three/drei';

export function House(props: any) {
  const { scene } = useGLTF('/fixed_lowpoly_cockroach_house.glb');

  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/fixed_lowpoly_cockroach_house.glb');