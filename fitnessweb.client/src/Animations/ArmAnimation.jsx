import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ArmAnimation = () => {
    const group = useRef();

   
    const { scene, animations } = useGLTF('/Armanimation.glb'); 
    const { actions, mixer } = useAnimations(animations, group);

   
    React.useEffect(() => {
        if (actions && actions['Action']) { 
            actions['Action'].reset().play();
        }
    }, [actions]);

    
    useFrame((state, delta) => {
        mixer?.update(delta);
    });

    return <primitive object={scene} ref={group} scale={1.5} position={[0,0, 1.5]} />;
};

export default ArmAnimation;
