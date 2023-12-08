import {Plane} from "@react-three/drei";

const cases = new Array(20).fill(0).map((_, i) => {
    return new Array(10).fill(0).map((_, j) => {
        return 10 * i + j;
    });
})

const TetrisGrid = () => {
    return (
        <group position={[0, 0, -1]}>
            {
                cases.map((row, i) => {
                    return row.map((_, j) => {
                        return (
                            <Plane key={10 * i + j} args={[0.95, 0.95]} position={[j - 4, i - 10, 0]} >
                                <meshStandardMaterial color="orange"/>
                            </Plane>
                        );
                    })
                })
            }
        </group>
    );
};

export default TetrisGrid;