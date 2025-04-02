import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import muscles from '../data/musclesData';

const Model = ({ path, highlightSpieren, selected, onClickSpier }) => {
    const gltf = useGLTF(path);
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.isMesh) {
                    const isHighlighted = highlightSpieren.includes(child.name);
                    const isSelected = child.name === selected;

                    if (isHighlighted) {
                        child.material.emissive = new THREE.Color(isSelected ? 0x2A909A : 0xf08080);
                    } else {
                        child.material.emissive = new THREE.Color(0x000000);
                    }
                }
            });
        }
    });

    return (
        <primitive
            object={gltf.scene}
            ref={meshRef}
            scale={[1.5, 1.5, 1.5]}
            position={[1.7, path.includes('lower') ? -0.8 : -1.8, 0]}
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

const MuscleGroupModel = ({ highlightSpieren, selected, onClickSpier }) => {
    const path = highlightSpieren.length && muscles.find(m => m.name === highlightSpieren[0])?.path;
    if (!path) return null;

    return (
        <Canvas camera={{ fov: 30 }} style={{ width: '100%', height: '530px' }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <directionalLight position={[-5, -5, -5]} intensity={0.6} />
            <Model
                path={path}
                highlightSpieren={highlightSpieren}
                selected={selected}
                onClickSpier={onClickSpier}
            />
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                minDistance={2}
                maxDistance={4}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
};

export default MuscleGroupModel;
