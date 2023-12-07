import {Canvas} from "@react-three/fiber";

const Scene = () => {
    return (
        <>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <mesh
                    <boxGeometry />
                </mesh>
            </Canvas>
        </>
    );
};

export default Scene;