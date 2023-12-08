import {Canvas} from "@react-three/fiber";
import {OrbitControls, Sphere} from "@react-three/drei";

const Tetris = () => {
    return (
        <Canvas>
            <OrbitControls/>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            <Sphere />
        </Canvas>
    );
};

export default Tetris;