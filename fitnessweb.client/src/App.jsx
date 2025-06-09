import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

import Homepagina from './Paginas/Homepagina';
import Spierpagina from './Paginas/Spierpagina';
import ExerciseListPage from './Paginas/Oefeninglijstpagina';
import ExerciseDetail from './Paginas/Oefeningpagina';
import exercises from './data/exercisesData';
import Login from './Paginas/Login';
import Aanmelden from './Paginas/Aanmelden';

import Muscles from './Paginas/Muscles';

import { MuscleProvider } from './hooks/MuscleContext';
import PageNotFound from './Paginas/Errorpaginas/NotFound';
import MusclePageNotFound from './Paginas/Errorpaginas/MuscleNotFound';

import PublicLayout from './Layout';

function App() {
    return (
        <Router>
            <MuscleProvider>
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
                {/* Pagina's zonder layout */}
                <Route path="/" element={
                    <PublicLayout>
                        <PageWrapper><Homepagina /></PageWrapper>
                    </PublicLayout>}
                />
                <Route path="/login" element={
                    <PublicLayout>
                    <PageWrapper><Login /></PageWrapper>
                    </PublicLayout>
                } />
                <Route path="/aanmelden" element={
                    <PublicLayout>
                        <PageWrapper><Aanmelden /></PageWrapper>
                   </PublicLayout>
                } />
                <Route path="/spierpagina/:spiernaam" element={
                    <PublicLayout>
                        <PageWrapper><Spierpagina /></PageWrapper>
                    </PublicLayout>
                } />
                <Route
                    path="/exercises/:name"
                    element={
                        <PublicLayout>
                            <PageWrapper><ExerciseDetailWrapper /></PageWrapper>
                        </PublicLayout>
                    }

                />
                <Route path="/muscles" element={
                    <PublicLayout>
                        <PageWrapper><Muscles /></PageWrapper>
                    </PublicLayout>
                } />
                <Route path="/exercises" element={
                    <PublicLayout>
                        <PageWrapper><ExerciseListPage /></PageWrapper>
                    </PublicLayout>
                } />

               

                {/* Fallback route */}
                <Route path="*" element={<PageWrapper><PageNotFound /></PageWrapper>} />
                <Route path="/Spier404" element={<PageWrapper><MusclePageNotFound /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        style={{ height: '100%' }}
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
