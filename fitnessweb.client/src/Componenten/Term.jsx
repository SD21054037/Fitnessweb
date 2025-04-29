// Term.jsx
import React from 'react';
import './Term.css';

const Term = ({ children, definition }) => {
    return (
        <span className="term-wrapper">
            {children}
            <span className="tooltip">{definition}</span>
        </span>
    );
};

export default Term;
