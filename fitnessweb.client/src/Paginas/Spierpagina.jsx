import React, { useState } from 'react';
import './Spierpagina.css';
import HeaderComponent from '../Componenten/HeaderComponent';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';

const muscles = [
    { name: 'Lats', description: 'The latissimus dorsi is a large, flat muscle on the back that stretches to the sides, behind the arm, and is partly covered by the trapezius on the back near the midline.', path: '/upperbody.glb' },
    { name: 'Chest', description: 'The chest muscles are made up of the pectoralis major and pectoralis minor. These muscles are responsible for the movement of the shoulder joint.', path: '/upperbody.glb' },
    { name: 'Shoulders', description: 'The shoulder muscles include the deltoids and rotator cuff muscles, which are responsible for various movements of the shoulder joint.', path: '/upperbody.glb' },
];

const MuscleModel = ({ path, setHoveredMuscle, setSelectedMuscle }) => {
    const { scene } = useGLTF(path);
    const [hovered, setHovered] = useState(null);

    scene.traverse((child) => {
        if (child.isMesh) {
            child.onPointerOver = (e) => {
                e.stopPropagation();
                setHovered(child.name);
                setHoveredMuscle(child.name);
                child.material.color.set("red");
            };

            child.onPointerOut = () => {
                setHovered(null);
                setHoveredMuscle(null);
                child.material.color.set("white");
            };

            child.onClick = () => {
                setSelectedMuscle(muscles.find(m => m.name === child.name) || null);
            };
        }
    });

    return <primitive object={scene} scale={1.5} />;
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
                    <Canvas camera={{ position: [3, 2, -5] }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, -5]} />
                        <MuscleModel path="/upperbody.glb" setHoveredMuscle={setHoveredMuscle} setSelectedMuscle={setSelectedMuscle} />
                        <OrbitControls />
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
