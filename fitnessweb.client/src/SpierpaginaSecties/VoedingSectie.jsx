import React from 'react';
import '../Paginas/Spierpagina.css';

const VoedingSectie = ({ selectedMuscle }) => {
    return (
        <div className="spierinformatie">
            <h4>Voeding en Herstel</h4>
            
            {/* Eiwitinname */}
            <div className="subsectie">
                <h5>Eiwitinname</h5>
                <p><strong>Aanbevolen hoeveelheid:</strong> 1.6 - 2.0 gram eiwit per kilogram lichaamsgewicht.</p>
                <p><strong>Bronnen:</strong> Kip, vis, eieren, bonen en zuivel.</p>
            </div>

            {/* Hydratatie */}
            <div className="subsectie">
                <h5>Hydratatie</h5>
                <p><strong>Aanbevolen hoeveelheid:</strong> Minimaal 2 liter water per dag.</p>
                <p><strong>Tip:</strong> Drink extra water tijdens intensieve trainingen.</p>
            </div>

            {/* Hersteltips */}
            <div className="subsectie">
                <h5>Hersteltips</h5>
                <ul>
                    <li>Zorg voor voldoende slaap (7-9 uur per nacht).</li>
                    <li>Stretch regelmatig om de flexibiliteit te behouden.</li>
                    <li>Gebruik een foam roller om spierknopen te verminderen.</li>
                </ul>
            </div>
        </div>
    );
};

export default VoedingSectie;