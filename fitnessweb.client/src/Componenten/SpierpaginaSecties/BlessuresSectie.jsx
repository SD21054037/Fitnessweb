import React from 'react';
import './BlessuresSectie.css';
import { Collapse } from 'antd';
import { highlightTerms } from '../../utils/highlightTerms'; // pad naar highlightTerms functie



const BlessuresSectie = ({ selectedMuscle }) => {
    if (!selectedMuscle || !selectedMuscle.injuries) return null;

    const { common, prevention, treatment, specific, diagnosis, rehab, faq } = selectedMuscle.injuries;

    return (
        <section className="card">
            <div className="blessure-tekstblok">
                <h3>Injuries</h3>

                <p>
                    Injuries related to the <strong>{selectedMuscle.displayName}</strong> are commonly associated with {highlightTerms(common?.toLowerCase())}.
                </p>

                {specific && (
                    <>
                        <h4>Common Injuries:</h4>
                        <ul>
                            {specific.map((injury, index) => (
                                <li key={index}>
                                    <strong>{injury.name}:</strong> {injury.description}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {diagnosis && (
                    <>
                        <h4>Diagnosis & Symptoms:</h4>
                        <p>{highlightTerms(diagnosis)}</p>
                    </>
                )}

                <h4>Prevention:</h4>
                <p>{highlightTerms(prevention)}</p>

                <h4>Treatment:</h4>
                <p>{highlightTerms(treatment)}</p>

                {rehab && (
                    <>
                        <h4>Rehab Exercises:</h4>
                        <ul>
                            {rehab.map((exercise, index) => (
                                <li key={index}>{highlightTerms(exercise)}</li>
                            ))}
                        </ul>
                    </>
                )}

                {faq && (
                    <>
                        <h4>FAQ / Myths:</h4>
                        <Collapse
                            accordion
                            className="collapse_header"
                            items={faq.map((item, index) => ({
                                key: index.toString(),
                                label: item.q,
                                children: <p>{highlightTerms(item.a)}</p>
                            }))}
                        />

                    </>
                )}
            </div>

            {/*<div className="blessure-illustratie">*/}
            {/*    <img src="/blessure-afbeelding.jpg" alt="Injury illustration" />*/}
            {/*    <p className="illustratie-caption"><em>Illustration of muscle tear or overuse injury.</em></p>*/}
            {/*</div>*/}
        </section>
    );
};

export default BlessuresSectie;
