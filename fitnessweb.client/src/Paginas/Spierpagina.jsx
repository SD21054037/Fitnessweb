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
import AnatomySectie from '../SpierpaginaSecties/AnatomieSectie';
import BlessuresSectie from '../SpierpaginaSecties/BlessuresSectie';
import OefeningenSectie from '../SpierpaginaSecties/OefeningenSectie';






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
                       <AnatomySectie selectedMuscle={selectedMuscle} />

                        {/* Blessures Sectie */}
                       <BlessuresSectie selectedMuscle={selectedMuscle} />

                        {/* Oefeningen Sectie */}
                       <OefeningenSectie selectedMuscle={selectedMuscle} />
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
