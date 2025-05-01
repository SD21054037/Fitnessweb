import { Link } from 'react-router-dom';
import muscleGroups from '../data/muscleGroupsData';
import './Muscles.css';
import Musclemodel from '../Componenten/Musclemodel';
import { useMuscleVisibility } from '../hooks/useMuscleVisibility';

export default function Muscles() {
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
        <div className="muscles-page">
            <h2>Select a muscle to learn more about it</h2>

            <div className="muscles-layout">
                <div className="model-container">
                    <Musclemodel modelRef={modelRef} handleSceneReady={handleSceneReady} />
                </div>

                <div className="muscle-list">
                    <h3>Or select from the list:</h3>
                    <ul>
                        {muscleGroups.map((group) =>
                            group.muscles.map((muscle) => (
                                <li key={muscle}>
                                    <Link to={`/muscle/${muscle}`}>{muscle.replaceAll('_', ' ')}</Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
