import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { MeshBasicMaterial } from "three";

interface ThreeImageProps {
  position: THREE.Vector3;
  src: string;
}
export const ThreeImage = ({ position, src }: ThreeImageProps) => {
  const texture = useLoader(THREE.TextureLoader, src);
  const camera = useThree((state) => state.camera);
  const ref = useRef<MeshBasicMaterial>(null);
  const ratio = texture.image.height / texture.image.width;

  useFrame(() => {
    const dist = camera.position.z - position.z;
    const opacity = dist > 250 ? 0 : Math.sin((dist - 50) * 0.02);

    if (ref.current) {
      ref.current.opacity = opacity;
    }
  });

  return (
    <mesh position={position}>
      <planeBufferGeometry attach="geometry" args={[100, 100 * ratio]} />
      <meshBasicMaterial
        transparent
        ref={ref}
        attach="material"
        map={texture}
        color={new THREE.Color(1, 1, 1)}
      />
    </mesh>
  );
};
