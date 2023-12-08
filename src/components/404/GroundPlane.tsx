import {Plane} from "@react-three/drei";

const GroundPlane = () => {
    return (
        <Plane args={[20, 20]} position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]} >
            <meshStandardMaterial color="green"/>
        </Plane>
    );
};

export default GroundPlane;