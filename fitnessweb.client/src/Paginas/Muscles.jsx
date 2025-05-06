import { useNavigate } from 'react-router-dom';
import muscleGroups from '../data/muscleGroupsData';
import './Muscles.css';
import { useMuscle } from '../hooks/MuscleContext';
import Musclemodel from '../Componenten/MuscleModel';
import { useRef } from 'react'; 
export default function Muscles() {
  const allMuscles = muscleGroups.flatMap((group) => group.muscles);
  const contextMuscle = useMuscle();
    const navigate = useNavigate();
    const modelRef = useRef();
    

  const handleMuscleClick = (clickedName) => {
    if (contextMuscle) {
      const groepEntry = Object.entries(muscleGroups).find(([groepNaam, groep]) =>
        groep.muscles.includes(clickedName)
      );

      if (groepEntry) {
        const [groepNaam] = groepEntry;
        contextMuscle.selectMuscle(clickedName);
        contextMuscle.selectMuscleGroup(groepNaam);
        navigate('/spierpagina');
      }
    }
  };

  return (
      <div className="muscles-page">
          <h2>Explore the Human Musculature</h2>

          <div className="muscles-container">
              <div className="muscles-left">
                  <div className="muscles-viewer">
                      <Musclemodel modelRef={modelRef} />
                  </div>
              </div>

              <div className="muscles-right">
                  <div className="muscles-header">
                      <h3>Search or select a muscle</h3>
                      <input
                          type="text"
                          placeholder="Search muscles..."
                          className="muscles-search"
                      />
                  </div>

                  <div className="muscle-grid">
                      {allMuscles.map((muscle) => (
                          <button
                              key={muscle}
                              className="muscle-button"
                              onClick={() => handleMuscleClick(muscle)}
                          >
                              {muscle.replaceAll('_', ' ')}
                          </button>
                      ))}
                  </div>
              </div>
          </div>
      </div>

  );
}
