import React, { useState, useEffect } from 'react';
import './Spierpagina.css';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { useMuscle } from '../Componenten/MuscleContext';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Footer from '../Componenten/Footer';
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

const Spierpagina = () => {
    const { selectedMuscle: contextMuscle } = useMuscle();
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const [canvasKey, setCanvasKey] = useState(0);

    useEffect(() => {
        if (contextMuscle) {
            const muscle = muscles.find(m => m.name === contextMuscle);
            setSelectedMuscle(muscle);
        }


        setTimeout(() => {
            setCanvasKey((prevKey) => prevKey + 1);
        }, 100);

    }, [contextMuscle]);

    return (
        <div className="Spierpagina">
            <main className='SPmain-content'>
                {selectedMuscle ? (
                    <>
                        {/* Anatomie Sectie */}
                        <div className="sectie-anatomie">
                            <div className="sectie-links">
                                <Canvas camera={{ fov: 20 }} style={{ width: '100%', height: '530px' }}>
                                    <ambientLight intensity={0.6} />
                                    <directionalLight position={[5, 5, 5]} intensity={0.6} />
                                    <directionalLight position={[-5, -5, -5]} intensity={0.6} />
                                    <MuscleModel selectedMuscle={selectedMuscle} />
                                    <OrbitControls enableZoom={true} enablePan={true} />
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

                        {/* Blessures Sectie */}
                        <div className="sectie-blessures">
                            <div className="sectie-links">
                                <h4>Blessures</h4>
                                <p><strong>Veelvoorkomende blessures:</strong></p>
                                <p>{selectedMuscle.injuries.common}</p>
                                <p><strong>Preventie:</strong></p>
                                <p>{selectedMuscle.injuries.prevention}</p>
                                <p><strong>Behandeling:</strong></p>
                                <p>{selectedMuscle.injuries.treatment}</p>
                            </div>
                            <div className="sectie-rechts">
                                <img src="/blessure-afbeelding.jpg" alt="Blessure Afbeelding" />
                                <p><em>Illustratie van een gescheurde spier.</em></p>
                            </div>
                        </div>

                        {/* Oefeningen Sectie */}
                        <div className="sectie-oefeningen">
                            <div className="sectie-links">
                                <video controls>
                                    <source src="/pull-up-animatie.mp4" type="video/mp4" />
                                    Je browser ondersteunt geen video's.
                                </video>
                            </div>
                            <div className="sectie-rechts">
                                <h4>Oefeningen</h4>
                                <ul>
                                    {selectedMuscle.exercises.map((exercise, index) => (
                                        <li key={index}>
                                            <strong>Oefening {index + 1}:</strong> {exercise}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Click on a muscle to get more information.</p>
                )}
            </main>
            <Footer />
        </div>
    );
};
export default Spierpagina;
