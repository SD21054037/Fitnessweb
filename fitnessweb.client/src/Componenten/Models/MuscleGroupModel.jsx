import React, { useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import muscles from '../../data/musclesData';

const Model = ({ path, highlightSpieren, selected, onClickSpier, visibleBones, controls }) => {
    const gltf = useGLTF(path);
    const meshRef = useRef();
    const targetRef = useRef(null);

    useFrame(() => {
        if (!controls || !meshRef.current) return;
        if (meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.isMesh) {
                    const isHighlighted = highlightSpieren.includes(child.name);
                    const isSelected = child.name === selected;
                    const isBone = visibleBones.includes(child.name);

                    child.visible = isHighlighted || isBone;

                    if (isBone) {
                        child.material.color = new THREE.Color("#cccccc");
                        child.material.transparent = true;
                        child.material.opacity = 0.4;
                    }

                    child.material.emissive = new THREE.Color(
                        isSelected ? 0x2A909A : isHighlighted ? 0xf08080 : 0x000000
                    );

                    child.material.transparent = true;
                    child.material.opacity = isSelected ? 1 : isHighlighted ? 0.25 : 0.1;

                    // Focus camera, werkt pas wanneer ik de spieren verder heb opgesplitst in rechts en links
                    //if (isSelected && child.geometry && child.geometry.boundingBox === null) {
                    //    child.geometry.computeBoundingBox();
                    //}

                    if (isSelected && child.geometry?.boundingBox) {
                        const center = new THREE.Vector3();
                        child.geometry.boundingBox.getCenter(center);
                        meshRef.current.localToWorld(center);

                        if (!targetRef.current || !targetRef.current.equals(center)) {
                            controls.target.lerp(center, 0.1);
                            controls.update();
                            targetRef.current = center.clone();
                        }
                    }
                }
            });
        }
    },[selected]);

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
                controls={orbitControlsRef.current}
            />
        </Canvas>
    );
};

export default MuscleGroupModel;
