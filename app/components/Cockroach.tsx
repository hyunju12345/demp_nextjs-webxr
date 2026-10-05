'use client';

import { useGLTF } from '@react-three/drei';

export function Cockroach(props: any) {
  const { scene } = useGLTF('/cr.glb');

  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/cr.glb');