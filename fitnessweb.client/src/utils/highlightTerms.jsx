import React from 'react';
import Term from '../Componenten/Term';
import dictionary from '../data/dictionary'; 

export function highlightTerms(text) {
    if (!text) return text; 

    const terms = Object.keys(dictionary);

    if (terms.length === 0) return text; 

    const regex = new RegExp(`(${terms.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
        const definition = dictionary[part];
        if (definition) {
            return <Term key={index} definition={definition}>{part}</Term>;
        } else {
            return part; 
        }
    });
}
