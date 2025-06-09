import React from 'react';
import './Oefeningpagina.css';

const ExerciseDetail = ({ exercise }) => {
  if (!exercise) return null;

    return (
        <div className="exercise-detail-background">
    <section className="exercise-detail-container">
      <div className="exercise-header">
        <h2>{exercise.name}</h2>
        <p className="intro">{exercise.intro}</p>
      </div>

      <div className="exercise-content">
        <div className="exercise-text">
          <div className="section">
            <h3>Targeted Muscles</h3>
            <p>
              <strong>Primary:</strong> {exercise.muscles.primary.join(', ')}<br />
              <strong>Secondary:</strong> {exercise.muscles.secondary.join(', ')}
            </p>
          </div>

          <div className="section">
            <h3>Why this exercise?</h3>
            <p>{exercise.reason}</p>
          </div>

          <div className="section">
            <h3>How to perform it</h3>
            <p>{exercise.execution}</p>
          </div>

          <div className="section">
            <h3>How to warm up</h3>
            <p>{exercise.warmup}</p>
          </div>

          <div className="section">
            <h3>How to integrate into your program</h3>
            <p>{exercise.programming}</p>
          </div>
        </div>

        <div className="exercise-animation">
          <div className="animation-placeholder">
            [Exercise animation here]
          </div>
        </div>
      </div>
            </section>
    </div>
  );
};

export default ExerciseDetail;
