import React, { useState, useRef } from 'react';
import './Spierpagina.css';
import HeaderComponent from '../Componenten/HeaderComponent';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';

const muscles = [
    { name: 'Lats', description: 'The latissimus dorsi is a large, flat muscle on the back that stretches to the sides, behind the arm, and is partly covered by the trapezius on the back near the midline.', path: '/upperbody.glb' },
    { name: 'Chest', description: 'The chest muscles are made up of the pectoralis major and pectoralis minor. These muscles are responsible for the movement of the shoulder joint.', path: '/upperbody.glb' },
    { name: 'Schoulders', description: 'The shoulder muscles include the deltoids and rotator cuff muscles, which are responsible for various movements of the shoulder joint.', path: '/upperbody.glb' },
];

const MuscleModel = ({ path, setHoveredMuscle, setSelectedMuscle, selectedMuscle }) => {
    const { scene } = useGLTF(path);
    const [hovered, setHovered] = useState(null);
    const meshRef = useRef(scene);

    useFrame(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                // If muscle is selected, keep it red, otherwise reset it
                if (selectedMuscle && child.name === selectedMuscle.name) {
                    child.material.color.set("blue");
                } else if (hovered === child) {
                    child.material.color.set("red"); // Temporary hover effect
                } else {
                    child.material.color.set("white"); // Reset others
                }
            }
        });
    });

    return (
        <primitive
            object={scene}
            ref={meshRef}
            scale={1.5}
            position={[1.6, -1.8, 0]}
            rotation={[0, Math.PI, 0]}
            onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(e.object);
                setHoveredMuscle(e.object.name);
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                setHovered(null);
                setHoveredMuscle(null);
            }}
            onClick={(e) => {
                e.stopPropagation();
                const clickedMuscle = muscles.find(m => m.name.toLowerCase() === e.object.name.toLowerCase());
                if (clickedMuscle) {
                    setSelectedMuscle(clickedMuscle);
                }
            }}
        />
    );
};



MuscleModel.propTypes = {
    path: PropTypes.string.isRequired,
    setHoveredMuscle: PropTypes.func.isRequired,
    setSelectedMuscle: PropTypes.func.isRequired,
};

const Spierpagina = () => {
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const [hoveredMuscle, setHoveredMuscle] = useState(null);

    return (
        <div className="Spierpagina">
            <HeaderComponent />
            <div className="spacer layer1"></div>
            <main className='main-content'>
                <div className='spiermodel'>
                    <Canvas camera={{ position: [-0.2, 2, 2], fov: 40 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={0.5} />
                        <directionalLight position={[-5, -5, -5]} intensity={0.5} />

                        <MuscleModel
                            path="/upperbody2.glb"
                            setHoveredMuscle={setHoveredMuscle}
                            setSelectedMuscle={setSelectedMuscle}
                            selectedMuscle={selectedMuscle}
                        />


                        <OrbitControls target={[0, 0, 0]} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                    </Canvas>

                    {hoveredMuscle && (
                        <div className="tooltip">
                            {hoveredMuscle}
                        </div>
                    )}
                </div>
                <div className='spiermodel-uitleg'>
                    {selectedMuscle ? (
                        <div>
                            <h3>{selectedMuscle.name}</h3>
                            <p>{selectedMuscle.description}</p>
                        </div>
                    ) : (
                        <p>Click on a muscle to get more information.</p>
                    )}
                </div>
            </main>
            <div className="spacer layer1 flip"></div>
            <footer></footer>
        </div>
    );
};

export default Spierpagina;

