import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciseCard.css';


const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercises/${encodeURIComponent(exercise.name)}`} className="exercise-card" >
            <div className="exercise-card-image">
                <img src={ }





        </Link>

    );

}
export default ExerciseCard;