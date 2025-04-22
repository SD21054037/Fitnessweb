import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect } from 'react';

const ArmAnimation = () => {
    const group = useRef();
    const { scene, animations } = useGLTF('/Armanimation.glb');
    const { actions } = useAnimations(animations, group);
    console.log(actions); // wat zie je hier?
    console.log(animations); // wordt je animatie wel geladen?

    useEffect(() => {
        if (actions && actions['ArmatureAction']) {
            actions['ArmatureAction'].reset().play();
        }
    }, [actions]);

    return (
        <group ref={group} scale={2} position={[-0.5, -2.5, 0.6]}>
            <primitive object={scene} />
        </group>
    );
};


export default ArmAnimation;
