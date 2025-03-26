import React, { useEffect } from 'react';
import '../Paginas/Spierpagina.css';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { useMuscle } from '../Componenten/MuscleContext';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import muscles from '../data/musclesData';


const MuscleModel = ({ selectedMuscle }) => {
    const gltf = useLoader(GLTFLoader, selectedMuscle.path);
    const meshRef = useRef();
    const { scene } = useThree();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.isMesh) {
                    child.material.emissive.setHex(0x000000);

                    if (child.name === selectedMuscle.name) {
                        child.material.emissive.setHex(0xF08080);
                    }
                }
            });
        }
    });

    useEffect(() => {
        if (gltf && gltf.scene) {
            gltf.scene.traverse((object) => {
                if (object.isMesh) {
                    object.material.emissive = object.material.emissive || new THREE.Color(0x000000);
                }
            });
            meshRef.current = gltf.scene;
        }
    }, [gltf]);

    if (!gltf) return null;

    if (selectedMuscle.path === '/lowerbody2.glb') {
        return <primitive object={gltf.scene} scale={[1.5, 1.5, 1.5]} position={[1.7, -0.8, 0]} rotation={[0, Math.PI, 0]} />;
    } else if (selectedMuscle.path === '/upperbody2.glb') {
        return <primitive object={gltf.scene} scale={[1.5, 1.5, 1.5]} position={[1.7, -1.8, 0]} rotation={[0, Math.PI, 0]} />;
    }

    return null;
};



MuscleModel.propTypes = {
    selectedMuscle: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired,
};



const AnatomieSectie = ({ selectedMuscle }) => {
    return (
                        <div className="sectie-anatomie">
                            <div className="sectie-links">
                                <Canvas camera={{ fov: 20 }} style={{ width: '100%', height: '530px' }}>
                                    <ambientLight intensity={0.6} />
                                    <directionalLight position={[5, 5, 5]} intensity={0.6} />
                                    <directionalLight position={[-5, -5, -5]} intensity={0.6} />
                                    <MuscleModel selectedMuscle={selectedMuscle} />
                                    <OrbitControls enableZoom={true} enablePan={true} 
                                    minDistance={2}
                                    maxDistance={4}
                                    maxPolarAngle={Math.PI / 2}
                                    minPolarAngle={Math.PI / 2}
                                    />
                                </Canvas>
                            </div>
                            <div className="sectie-rechts">
                                <h4>Anatomie</h4>
                                <p><strong>Oorsprong:</strong></p>
                                <p>{selectedMuscle.anatomy.origin}</p>
                                <p><strong>Insertie:</strong></p>
                                <p>{selectedMuscle.anatomy.insertion}</p>
                                <p><strong>Functie:</strong></p>
                                <p>{selectedMuscle.anatomy.function}</p>
                            </div>
                        </div>
    );
};

export default AnatomieSectie;