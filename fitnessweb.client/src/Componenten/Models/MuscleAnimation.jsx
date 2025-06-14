import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

import { useRef, useEffect} from 'react';


const MuscleAnimationModel = ({ path, paused }) => {
    const group = useRef();
    const { scene, animations } = useGLTF(path);
    const mixer = useRef();

    useEffect(() => {
        if (animations.length && group.current) {
            mixer.current = new THREE.AnimationMixer(group.current);
            const action = mixer.current.clipAction(animations[0]);
            action.play();
            action.paused = paused;
        }
        return () => mixer.current?.stopAllAction();
    }, [animations, paused]);

    useFrame((_, delta) => {
        if (mixer.current && !paused) {
            mixer.current.update(delta);
        }
    });

    return (
        <group ref={group}>
            <primitive object={scene} position={[-2, -0.5, 0]} />
        </group>
    );
};



const MuscleAnimation = ({ AnimationPath, paused }) => {
    return (
        <Canvas camera={{ fov: 55 }} style={{ width: '100%', height: '400' }}  >
            
            <ambientLight intensity={0.5} />
            
            <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
            <MuscleAnimationModel path={AnimationPath} paused={paused} />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true}
                
            />
        </Canvas>
    );
}

export default MuscleAnimation;

