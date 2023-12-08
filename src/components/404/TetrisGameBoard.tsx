import {Canvas, } from "@react-three/fiber";
import TetrisText from "./TetrisText.tsx";
import Camera from "./Camera.tsx";


const TetrisGameBoard = () => {




    return (
        <Canvas>
            <Camera />
            <ambientLight intensity={1} />
            <TetrisText />
        </Canvas>
    );
};

export default TetrisGameBoard;