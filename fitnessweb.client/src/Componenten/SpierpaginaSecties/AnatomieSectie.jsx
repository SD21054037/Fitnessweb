import { useState, useRef, Suspense } from "react";
import "./AnatomieSectie.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { highlightTerms } from "../../utils/highlightTerms";
import AnatomyModel from "../Models/AnatomyModel";
import { Button } from "antd";

const AnatomieSectie = ({ selectedMuscle }) => {
  const [currentView, setCurrentView] = useState("origin");
  const orbitControlsRef = useRef();
  if (!selectedMuscle || !selectedMuscle.anatomy) return null;

  return (
    <section className="card">
      <div className="anatomie-tekstblok">
        <h3>{selectedMuscle.displayName}</h3>

        <p>
          {highlightTerms(`The ${
            selectedMuscle.displayName
          } is located in the ${
            selectedMuscle.anatomy.location?.toLowerCase() ?? "body"
          } and plays an important role in ${
            selectedMuscle.anatomy.function?.toLowerCase() ?? "movement"
          }. This muscle originates from the ${selectedMuscle.anatomy.originText?.toLowerCase()}, and inserts into the ${selectedMuscle.anatomy.insertionText?.toLowerCase()}. Because of this, it contributes to movements such as ${selectedMuscle.anatomy.function?.toLowerCase()}.

                    It is innervated by the ${
                      selectedMuscle.anatomy.innervation
                    } and receives blood supply from the ${
            selectedMuscle.anatomy.bloodSupply
          }. While performing its function, this muscle often works together with synergist muscles such as ${
            selectedMuscle.anatomy.synergists
          }, while antagonist muscles like ${
            selectedMuscle.anatomy.antagonists
          } perform the opposite action. This balance between muscles ensures controlled and efficient movement.`)}
        </p>
      </div>

      <div className="anatomie-animatie-placeholder">
        <div className="anatomie-animatie-header">
          <div className="anatomie-animatie-header-text">
            <h4>3D Anatomie</h4>
            <p>Current view: {currentView}</p>
          </div>
          <Button variant="ghost" onClick={() => setCurrentView("origin")}>
            origin
          </Button>
          <Button variant="ghost" onClick={() => setCurrentView("insertion")}>
            insertion
          </Button>
          <Button variant="ghost" onClick={() => setCurrentView("animation")}>
            animation
          </Button>
        </div>

        <div className="anatomie-animatie-content">
          <Canvas
            camera={{ fov: 20, position: [0, 1, 3] }}
            style={{ width: "100%", height: "400px" }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={0.5} />
            <OrbitControls ref={orbitControlsRef} />
            <Suspense fallback={null}>
              <AnatomyModel
                modelPath={selectedMuscle.anatomy.path}
                currentView={currentView}
                selectedMuscle={selectedMuscle}
                controls={orbitControlsRef.current}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default AnatomieSectie;
