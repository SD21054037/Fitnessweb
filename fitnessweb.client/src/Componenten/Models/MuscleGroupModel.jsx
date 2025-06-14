import React, { useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';
import muscles from '../../data/musclesData';

const Model = ({ path, highlightSpieren, selected, onClickSpier, visibleBones }) => {
    const gltf = useGLTF(path);
    const meshRef = useRef();
    console.log(selected);

    useEffect(() => {
        if (!meshRef.current) return;

        meshRef.current.traverse((child) => {
            if (child.isMesh) {
                const name = child.name;
                const isHighlighted = highlightSpieren.includes(name);
                const isSelected = selected === name;
                
                const isBone = visibleBones.includes(name);



                child.visible = isHighlighted || isBone;

                if (isBone) {
                    child.material.color.set('#cccccc');
                    child.material.transparent = true;
                    child.material.opacity = 0.4;
                }

                child.material.emissive.set(isSelected ? 0x2A909A : isHighlighted ? 0x4DD0E1 : 0x000000);
                child.material.transparent = true;
                child.material.opacity = isSelected ? 1 : isHighlighted ? 0.25 : 0.1;

            }
        });
    }, [highlightSpieren, selected, visibleBones]);


    




    return (
        <primitive
            object={gltf.scene}
            ref={meshRef}
            scale={1.5}
            position={[0, path.includes('lower') ? -1 : -1.8, 0]}
            rotation={[0, Math.PI, 0]}
            onClick={(e) => {
                e.stopPropagation();
                const clickedName = e.object.name;
                const match = muscles.find(m => m.name === clickedName);
                if (match && highlightSpieren.includes(clickedName)) {
                    onClickSpier(match);
                }
            }}
        />
    );
};

const MuscleGroupModel = ({ highlightSpieren, selected, onClickSpier, visibleBones }) => {
    const path = highlightSpieren.length && muscles.find(m => m.name === highlightSpieren[0])?.path;
    const orbitControlsRef = useRef(null);

    if (!path) return null;

    return (
        <Canvas camera={{ fov: 20 }} style={{ width: '100%', height: '530px' }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <directionalLight position={[-5, -5, -5]} intensity={0.6} />

            <OrbitControls
                ref={orbitControlsRef}
                enableZoom={true}
                enablePan={true}
                minDistance={2}
                maxDistance={4}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                
            />

           
            <Model
                path={path}
                highlightSpieren={highlightSpieren}
                selected={selected}
                onClickSpier={onClickSpier}
                visibleBones={visibleBones}
                
            />
            
        </Canvas>
    );
};

export default MuscleGroupModel;
