import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Homepagina from './Paginas/Homepagina';
import Spierpagina from './Paginas/Spierpagina';
import HeaderComponent from './Componenten/HeaderComponent';
import { MuscleProvider } from './hooks/MuscleContext';
import ExerciseListPage from './Paginas/Oefeninglijstpagina';
import ExerciseDetail from './Paginas/Oefeningpagina';
import exercises from './data/exercisesData';

function App() {
    return (
        <Router>
            <MuscleProvider>
                <HeaderComponent />
                <AnimatedRoutes />
            </MuscleProvider>
        </Router>
    );
}

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Homepagina /></PageWrapper>} />
                <Route path="/spierpagina" element={<PageWrapper><Spierpagina /></PageWrapper>} />
                <Route path="/exercises" element={<PageWrapper><ExerciseListPage /></PageWrapper>} />
                <Route
                    path="/exercises/:name"
                    element={<PageWrapper><ExerciseDetailWrapper /></PageWrapper>}
                />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
    >
        {children}
    </motion.div>
);

const ExerciseDetailWrapper = () => {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name).toLowerCase();

    const exercise = exercises.find(e =>
        e.name.toLowerCase().replace(/\s+/g, '-') === decodedName
    );

    return <ExerciseDetail exercise={exercise} />;
};

export default App;
