import React, { useRef } from 'react';
import './Homepagina.css';
import CubeModel from '../Componenten/CubeModel';
import Footer from '../Componenten/Footer';
import Musclemodel from '../Componenten/MuscleModel';
import LineModel from '../Componenten/LineModel';
import MuscleVisibilityPanel from '../Componenten/MuscleVisibilityPanel';
import { useMuscleVisibility } from '../hooks/useMuscleVisibility';
import { useEffect } from 'react';
import { Button } from 'antd'; 

const Homepagina = () => {
   
    const {
        muscleVisibility,
        toggleVisibility,
        showAll,
        hideAll,
        generateMuscleListFromScene,
        modelRef
    } = useMuscleVisibility();

  
    const handleSceneReady = (scene) => {
        if (scene && scene.traverse) {
            generateMuscleListFromScene(scene);
            modelRef.current = scene;
            
        }
    };


    const hideAllMusclesOnModel = () => {
        if (modelRef.current) {
            modelRef.current.traverse(obj => {
                if (obj.isMesh) {
                    obj.visible = false;
                }
            });
        }
    };

    const showAllMusclesOnModel = () => {
        if (modelRef.current) {
            modelRef.current.traverse(obj => {
                if (obj.isMesh) {
                    obj.visible = true;
                }
            });
        }
    };

   

    return (
        <div className="homepagina">
            <main className="main-content">

                <div className="welkom">
                    <h2>Welcome to Fitness & Education!</h2>
                    <p>
                        This website is designed to help you learn more about the human body and how to take care of it.
                    </p>
                </div>

                <div className="midsection">
                    <div className="model">
                        <p>Select a muscle to learn more about it.</p>
                       
                       
                        {Object.keys(muscleVisibility).length > 0 && (
                            <MuscleVisibilityPanel
                                modelRef={modelRef}
                                hiddenMuscles={muscleVisibility}
                                toggleMuscleVisibility={toggleVisibility}
                                showAll={showAllMusclesOnModel}
                                hideAll={hideAllMusclesOnModel}
                            />
                        )}

                       


                        <Musclemodel modelRef={modelRef} handleSceneReady={handleSceneReady} />
                    </div>

                    <div className="Introductie">
                        <h3>The Muscular System</h3>
                        <p>
                            The muscular system is essential for everything from movement to posture and even body temperature.
                            Your body has over <strong>600 muscles</strong>, each working together to support strength, flexibility, and control.
                        </p>
                        <p>
                            There are <strong>three types of muscles</strong>:
                        </p>
                            <ul>
                                <li><strong>Skeletal muscles</strong> – responsible for voluntary movement</li>
                                <li><strong>Cardiac muscle</strong> – found only in the heart</li>
                                <li><strong>Smooth muscles</strong> – found in organs and blood vessels, working involuntarily</li>
                            </ul>
                        <p>
                            Understanding how your muscles work can help improve your training, prevent injuries, and boost your overall health.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Homepagina;
