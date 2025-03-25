import React from 'react';
import '../Paginas/Spierpagina.css';


const BlessuresSectie = ({ selectedMuscle }) => {
    return (
       <div className="sectie-blessures">
                            <div className="sectie-links">
                                <h4>Blessures</h4>
                                <p><strong>Veelvoorkomende blessures:</strong></p>
                                <p>{selectedMuscle.injuries.common}</p>
                                <p><strong>Preventie:</strong></p>
                                <p>{selectedMuscle.injuries.prevention}</p>
                                <p><strong>Behandeling:</strong></p>
                                <p>{selectedMuscle.injuries.treatment}</p>
                            </div>
                            <div className="sectie-rechts">
                                <img src="/blessure-afbeelding.jpg" alt="Blessure Afbeelding" />
                                <p><em>Illustratie van een gescheurde spier.</em></p>
                            </div>
                        </div>
    );
};

export default BlessuresSectie;