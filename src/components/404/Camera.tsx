import {useRef} from 'react';
import {PerspectiveCamera} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {Object3D} from "three";

const Camera = () => {
    const ref= useRef<Object3D>()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if(ref.current){
            ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
        }
    })
    return (
        <PerspectiveCamera
            ref={ref}
            makeDefault  // Cette propriété indique que cette caméra est la caméra par défaut
            position={[0, 0, 35]}  // Définir la position de la caméra
            fov={75}  // Champ de vision
            near={0.1}  // Plan de coupe proche
            far={1000}  // Plan de coupe éloigné
        />
    );
};

export default Camera;