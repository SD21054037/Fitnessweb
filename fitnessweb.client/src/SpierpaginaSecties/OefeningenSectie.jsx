import React from 'react';
import './OefeningenSectie.css';

const OefeningenSectie = ({ selectedMuscle }) => {
    if (!selectedMuscle || !selectedMuscle.exercises || selectedMuscle.exercises.length === 0) return null;

    return (
        <section className="oefeningen-container">
            <div className="oefeningen-tekstblok">
                <h3>Exercises</h3>
                {selectedMuscle.exercises.map((exercise, index) => (
                    <div className="oefening-blok" key={index}>
                        <h4>{exercise.name}</h4>
                        <p>{exercise.description}</p>
                    </div>
                ))}
            </div>

            <div className="oefeningen-animatie-placeholder">
                {/* Future animated preview here */}
            </div>
        </section>
    );
};

export default OefeningenSectie;
