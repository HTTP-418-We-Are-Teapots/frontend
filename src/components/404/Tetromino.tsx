import {ForwardedRef, forwardRef} from 'react';
import {RoundedBox} from "@react-three/drei";
import {GroupProps} from "@react-three/fiber";
import {Group, Vector3} from "three";

function getVector(x: number, y: number): Vector3{
    return new Vector3(x, y, 0)
}

const positions = [
    [getVector(0, 0), getVector(0, 1), getVector(0, 2), getVector(0, 3)], // line
    [getVector(0, 0), getVector(1, 0), getVector(1, 1), getVector(1, 2)], // L inversed
    [getVector(0, 0), getVector(1, 0), getVector(0, 1), getVector(0, 2)], // L
    [getVector(0, 0), getVector(0, 1), getVector(0, 2), getVector(1, 1)], // T
    [getVector(0, 0), getVector(0, 1), getVector(1, 0), getVector(1, 1)], // square
    [getVector(0, 0), getVector(0, 1), getVector(1, 1), getVector(1, 2)], // lightning right
    [getVector(1, 0), getVector(1, 1), getVector(0, 1), getVector(0, 2)], // lightning left
]
const Tetromino = forwardRef(function Tetromino(props: GroupProps & { tetromino: number, color: string }, ref : ForwardedRef<Group>) {
    return (
        <group {...props} ref={ref}>
            <RoundedBox
                position={positions[props.tetromino][0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={props.color}/>
            </RoundedBox>
            <RoundedBox
                position={positions[props.tetromino][1]}
                radius={0.05}
                smoothness={2}
                bevelSegments={4}
                creaseAngle={0.4} >
                <meshStandardMaterial color={props.color}/>
            </RoundedBox>
            <RoundedBox
                position={positions[props.tetromino][2]}
                radius={0.05}
                smoothness={2}
                bevelSegments={4}
                creaseAngle={0.4} >
                <meshStandardMaterial color={props.color}/>
            </RoundedBox>
            <RoundedBox
                position={positions[props.tetromino][3]}
                radius={0.05}
                smoothness={2}
                bevelSegments={4}
                creaseAngle={0.4} >
                <meshStandardMaterial color={props.color}/>
            </RoundedBox>
        </group>
    );
});


export default Tetromino;