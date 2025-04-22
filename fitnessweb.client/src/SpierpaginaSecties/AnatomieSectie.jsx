import React from 'react';
import './AnatomieSectie.css';
import ArmAnimation from '../Animations/ArmAnimation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
const AnatomieSectie = ({ selectedMuscle }) => {
    if (!selectedMuscle || !selectedMuscle.anatomy) return null;

  

    return (
        <section className="anatomie-container">
            <div className="anatomie-tekstblok">
                <h3>{selectedMuscle.displayName}</h3>
                <p>
                    The <strong>{selectedMuscle.displayName}</strong> is located in the {selectedMuscle.anatomy.location?.toLowerCase() ?? 'body'} and plays an important role in {selectedMuscle.anatomy.function?.toLowerCase() ?? 'movement'}. This muscle originates from the {selectedMuscle.anatomy.origin?.toLowerCase()}, and inserts into the {selectedMuscle.anatomy.insertion?.toLowerCase()}. Because of this, it contributes to movements such as {selectedMuscle.anatomy.function?.toLowerCase()}.

                    <br /><br />

                    It is innervated by the <strong>{selectedMuscle.anatomy.innervation}</strong> and receives blood supply from the <strong>{selectedMuscle.anatomy.bloodSupply}</strong>. While performing its function, this muscle often works together with synergist muscles such as <strong>{selectedMuscle.anatomy.synergists}</strong>, while antagonist muscles like <strong>{selectedMuscle.anatomy.antagonists}</strong> perform the opposite action. This balance between muscles ensures controlled and efficient movement.
                </p>

            </div>

           
            <div className="anatomie-animatie-placeholder">
                <Canvas camera={{ position: [4, 0, 1], fov: 40 }} style={{ width: '100%', height: '490px' }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[2, 2, 2]} />
                    <directionalLight position={[-2, -2, -2]} />
                     
                    <ArmAnimation />
                    <OrbitControls />
                </Canvas>
            </div>
        </section>
    );
};

export default AnatomieSectie;
