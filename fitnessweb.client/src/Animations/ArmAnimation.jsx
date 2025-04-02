import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const ArmAnimation = () => {
    const group = useRef();
    const lowerArmRef = useRef();
    const direction = useRef(1);

    const { nodes, materials } = useGLTF('/Arm-demo.glb'); // zorg dat pad klopt
    console.log(nodes);
    useFrame((_, delta) => {
        if (lowerArmRef.current) {
            lowerArmRef.current.rotation.z += direction.current * delta;
            const rot = lowerArmRef.current.rotation.z;
            if (rot > 0.5) direction.current = -1;
            if (rot < -0.1) direction.current = 1;
        }
    });

    return (
        <group ref={group} scale={1.5} position={[0, 0, 1.5]}>
            {/* Upper Arm (stilstaand) */}
            <mesh
                geometry={nodes.UpperArm.geometry}
                material={materials?.default || undefined}
                material-color="white"
            />

            <mesh
                ref={lowerArmRef}
                geometry={nodes.LowerArm.geometry}
                material={materials?.default || undefined}
                material-color="white"
            />

            {/* Biceps */}
            <mesh
                geometry={nodes.Biceps_brachii.geometry}
                material={materials.default}
                material-color="red"
            />

            {/* Triceps */}
            <mesh
                geometry={nodes.Triceps_brachii.geometry}
                material={materials.default}
                material-color="lightgray"
            />
        </group>
    );
};

export default ArmAnimation;
