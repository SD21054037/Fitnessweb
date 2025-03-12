import React, { useState, useEffect } from 'react';
import './Spierpagina.css';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import PropTypes from 'prop-types';

const muscles = [
    { name: 'Lats', description: 'The latissimus dorsi (lats) is a large, flat muscle of the back that plays a crucial role in upper body movement, posture, and stability. It is responsible for shoulder extension, adduction, and internal rotation, making it essential for pulling motions like pull-ups, rowing, and swimming. The lats also assist in scapular depression and retraction, contributing to shoulder and back stability. Additionally, they help stabilize the lumbar spine through their connection to the thoracolumbar fascia, aiding in posture and core support. Beyond movement, the lats assist in deep respiration by expanding the rib cage during forceful breathing.', path: '/upperbody2.glb' },
    { name: 'Schoulders', description: 'The shoulder muscles, primarily the deltoid and rotator cuff muscles, play a key role in arm movement, stability, and posture. The deltoid is responsible for shoulder flexion, abduction, and extension, allowing for movements like lifting, reaching, and pressing. The rotator cuff (supraspinatus, infraspinatus, teres minor, and subscapularis) stabilizes the glenohumeral joint, enabling controlled rotation and preventing dislocation. These muscles work together to provide mobility, strength, and dynamic stability, making them essential for sports, overhead movements, and functional activities like lifting and throwing. Proper shoulder function is crucial for injury prevention and optimal upper body performance.', path: '/upperbody2.glb' },
    { name: 'Chest', description: 'The chest muscles, primarily the pectoralis major and pectoralis minor, play a key role in upper body strength, movement, and stability. The pectoralis major is responsible for shoulder flexion, adduction, and internal rotation, enabling pushing movements like bench presses, push-ups, and punching. The pectoralis minor assists in scapular stabilization and depression, supporting shoulder mobility and posture. These muscles are essential for generating power in sports, functional movements, and daily activities requiring upper body force. Proper chest strength enhances performance, stability, and injury prevention in both athletic and everyday tasks.', path: '/upperbody2.glb' },
    
];

const MuscleModel = ({ selectedMuscle, setHoveredMuscle, setSelectedMuscle }) => {
    const { scene } = useGLTF(selectedMuscle.path);
    useGLTF.preload(selectedMuscle.path);

   
    const updateColors = () => {
        scene.traverse((child) => {
            if (child.isMesh) {
                if (selectedMuscle && child.name === selectedMuscle.name) {
                    child.material.color.set("red"); 
                } else {
                    child.material.color.set("white"); 
                }
            }
        });
    };

    updateColors(); 

    return (
        <primitive
            object={scene}
            scale={1.5}
            position={[1.6,-2.8, 0]}
            rotation={[0, Math.PI, 0]}
           
            onClick={(e) => {
                e.stopPropagation();
                const clickedMuscle = muscles.find(m => m.name === e.object.name);
                if (clickedMuscle) {
                    setSelectedMuscle(clickedMuscle);
                }
            }}
        />
    );
};


MuscleModel.propTypes = {
    selectedMuscle: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired,
  
    setSelectedMuscle: PropTypes.func.isRequired,
};

const Spierpagina = () => {
    const [selectedMuscle, setSelectedMuscle] = useState(null);
  

    useEffect(() => {
        const muscleName = localStorage.getItem('selectedMuscle');
        if (muscleName) {
            const muscle = muscles.find(m => m.name === muscleName);
            setSelectedMuscle(muscle);
        }
    }, []);

    return (
        <div className="Spierpagina">
            <div className="spacer layer1"></div>
            <main className='main-content'>
                <div className='spiermodel'>
                    <Canvas camera={{ position: [-0.2, 0, 2], fov: 50 }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[5, 5, 5]} intensity={0.5} />
                        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
                        {selectedMuscle && (
                            <MuscleModel
                                selectedMuscle={selectedMuscle}
                               
                                setSelectedMuscle={setSelectedMuscle}
                            />
                        )}
                        <OrbitControls
                            target={[0, -1, 0]} 
                            enablePan={false}
                            enableZoom={false}
                            minPolarAngle={Math.PI / 2}
                            maxPolarAngle={Math.PI / 2} 
                        />
                    </Canvas>
                </div>
                <div className='spiermodel-uitleg'>
                    {selectedMuscle ? (
                        <div>
                            <h2>{selectedMuscle.name}</h2>
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


