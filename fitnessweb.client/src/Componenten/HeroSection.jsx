
import { useFrame } from '@react-three/fiber';
import { Link } from 'react-router-dom';

import Musclemodel from '../Componenten/MuscleModel'; import './HeroSection.css';
import { useMuscleVisibility } from '../hooks/useMuscleVisibility';

export default function HeroSection() {
   

    //const hideAllMusclesOnModel = () => {
    //    if (modelRef.current) {
    //        modelRef.current.traverse(obj => {
    //            if (obj.isMesh) {
    //                obj.visible = false;
    //            }
    //        });
    //    }
    //};

    //const showAllMusclesOnModel = () => {
    //    if (modelRef.current) {
    //        modelRef.current.traverse(obj => {
    //            if (obj.isMesh) {
    //                obj.visible = true;
    //            }
    //        });
    //    }
    //};

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

    
    return (
        <section className="hero-section">
            
            <div className="hero-canvas-wrapper">
                <Musclemodel modelRef={modelRef} handleSceneReady={handleSceneReady} />
            </div>

            <div className="hero-overlay">
                <h1>Welcome to Fitness & Education!</h1>
                <p>Explore your muscles, understand your body, and train smarter.</p>
                <Link to="/aanmelden" className="cta-button">Start Exploring</Link>
            </div>
        </section>
    );
}
