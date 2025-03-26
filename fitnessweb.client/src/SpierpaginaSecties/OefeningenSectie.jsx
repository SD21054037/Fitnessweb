import '../Paginas/Spierpagina.css';
import React from 'react';


const OefeningenSectie = ({ selectedMuscle }) => {
    return (
<div className="sectie-oefeningen">
                            <div className="sectie-links">
                                <video controls>
                                    <source src="/pull-up-animatie.mp4" type="video/mp4" />
                                    Je browser ondersteunt geen video's.
                                </video>
                            </div>
                            <div className="sectie-rechts">
                                <h4>Oefeningen</h4>
                                <ul>
                                    {selectedMuscle.exercises.map((exercise, index) => (
                                        <li key={index}>
                                             {exercise}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        );
                        }

 export default OefeningenSectie;