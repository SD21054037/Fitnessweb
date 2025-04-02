import React from 'react';
import './BlessuresSectie.css';

const BlessuresSectie = ({ selectedMuscle }) => {
    if (!selectedMuscle || !selectedMuscle.injuries) return null;

    const { common, prevention, treatment } = selectedMuscle.injuries;

    return (
        <section className="blessure-container">
            <div className="blessure-tekstblok">
                <h3>Injuries</h3>
                <p>
                    Injuries related to the <strong>{selectedMuscle.displayName}</strong> are typically associated with {common?.toLowerCase()}. These issues often arise from poor movement mechanics, excessive loading, or lack of muscle control.
                    <br /><br />
                    To prevent these types of injuries, it's important to focus on {prevention?.toLowerCase()}. This includes a combination of proper warm-ups, progressive loading, mobility work, and muscular balance. Athletes and fitness enthusiasts are encouraged to gradually build strength and stability in this muscle group.
                    <br /><br />
                    In case of injury, treatment often involves {treatment?.toLowerCase()}. Depending on severity, this can range from simple rest and recovery to structured rehabilitation programs. Addressing imbalances and allowing proper healing time is essential to restore full function and avoid recurrence.
                </p>
            </div>

            <div className="blessure-illustratie">
                <img src="/blessure-afbeelding.jpg" alt="Injury illustration" />
                <p className="illustratie-caption"><em>Illustration of muscle tear or overuse injury.</em></p>
            </div>
        </section>
    );
};

export default BlessuresSectie;
