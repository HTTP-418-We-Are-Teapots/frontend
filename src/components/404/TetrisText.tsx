import { Cloud, Clouds, RoundedBox } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import Tetromino from "./Tetromino.tsx";
import { data } from "./store.ts";
import { COLORS } from "./types.ts";


const Zero = (props : GroupProps) => {
    return (
        <group {...props}>
            <RoundedBox
                position={[0, 0, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[0]}/>
            </RoundedBox>
            <RoundedBox
                position={[1, 0, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[0]}/>
            </RoundedBox>
            <RoundedBox
                position={[2, 1, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[4]}/>
            </RoundedBox>
            <RoundedBox
                position={[2, 2, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[5]}/>
            </RoundedBox>
            <RoundedBox
                position={[2, 3, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[0]}/>
            </RoundedBox>
            <RoundedBox
                position={[2, 3, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[2]}/>
            </RoundedBox>
            <RoundedBox
                position={[2, 4, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[0]}/>
            </RoundedBox>
            <RoundedBox
                position={[1, 5, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[6]}/>
            </RoundedBox>
            <RoundedBox
                position={[0, 5, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[0]}/>
            </RoundedBox>
        </group>
    );
}

const Four = (props : GroupProps) => {
    return (
        <group {...props}>
            <RoundedBox
                position={[0, 0, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[0]}/>
            </RoundedBox>
            <RoundedBox
                position={[0, 1, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[0]}/>
            </RoundedBox>
            <RoundedBox
                position={[0, 2, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[0]}/>
            </RoundedBox>
            <RoundedBox
                position={[0, 3, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[0]}/>
            </RoundedBox>
            <RoundedBox
                position={[0, 4, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[1]}/>
            </RoundedBox>
            <RoundedBox
                position={[0, 5, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[1]}/>
            </RoundedBox>
            <RoundedBox
                position={[-1, 5, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[1]}/>
            </RoundedBox>
            <RoundedBox
                position={[-2, 4, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[2]}/>
            </RoundedBox>
            <RoundedBox
                position={[-3, 3, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[2]}/>
            </RoundedBox>
            <RoundedBox
                position={[-2, 2, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[4]}/>
            </RoundedBox>
            <RoundedBox
                position={[-3, 2, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[4]}/>
            </RoundedBox>
            <RoundedBox
                position={[-2, 2, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[3]}/>
            </RoundedBox>
            <RoundedBox
                position={[-1, 2, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[3]}/>
            </RoundedBox>
            <RoundedBox
                position={[1, 2, 0]}
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={2} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} >
                <meshStandardMaterial color={COLORS[3]}/>
            </RoundedBox>
        </group>
    );
};


function Tile({ random, color = new THREE.Color(), ...props } :{random: number, color: THREE.Color, props: GroupProps}) {
    const ref = useRef<any>()
    useFrame((state) => {
        const t = state.clock.getElapsedTime() + random * 10000
        if (ref.current !== undefined) {
            ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
            ref.current.position.y = Math.sin(t / 1.5) * 8
            ref.current.position.x = Math.cos(t / 3) * 15
            ref.current.position.z = Math.cos(t / 5) * Math.sin(t) * 8
        }

    })
    const randomIndex = Math.floor(Math.random() * 3)
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]

    if (randomIndex === 0) {
        return (
            <Tetromino ref={ref} {...props} tetromino={1} color={randomColor} scale={[0.4, 0.4, 0.4]} />
        )
    } else if (randomIndex === 1) {
        return (
            <Tetromino ref={ref} {...props} tetromino={2} color={randomColor} scale={[0.4, 0.4, 0.4]} />
        )
    } else if (randomIndex === 2) {
        <Tetromino ref={ref} {...props} tetromino={3} color={randomColor} scale={[0.4, 0.4, 0.4]} />
    }

    return (
        <Tetromino ref={ref} {...props} tetromino={4} color={randomColor} scale={[0.4, 0.4, 0.4]} />
    )


}

function TetrisTiles({data}: { data: any}) {
    return (
        <group position={[0, 0, 0]}>
            {data.map((props: GroupProps, i: number) => (
                <Tile random={0} color={new THREE.Color} props={props} key={i} {...props} />
            ))}
        </group>
    )
}

const TetrisText = () => {
    return (
        <>
            <group position={[0, -2, 0]}>
                <Four position={[-5, 0, 0]}/>
                <group>
                    <Zero position={[0, 0, 0]} rotation={[0, Math.PI, 0]}/>
                    <Zero position={[0, 0, 0]}/>
                </group>
                <Four position={[7, 0, 0]}/>
                <Clouds position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
                    <Cloud scale={[1, 1, 1]} position={[12, 0, 0]} />
                    <Cloud scale={[1, 1, 1]} position={[-12, 0, 0]} />
                </Clouds>
            </group>
            <TetrisTiles data={data}/>
        </>
    )
}

export default TetrisText;