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
import CustomWorkoutBuilder from './Paginas/WorkoutBuilder';
import Muscles from './Paginas/Muscles';
import Dashboard from './Paginas/Dashboard';
import Profile from './Paginas/Profiel';
import Footer from './Componenten/Footer';
import { MuscleProvider } from './hooks/MuscleContext';

import DashboardLayout from './DashboardLayout';
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
                <Route path="/spierpagina" element={
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

                {/* Pagina's met DashboardLayout */}
                <Route path="/dashboard" element={
                    <DashboardLayout>
                        <PageWrapper><Dashboard /></PageWrapper>
                    </DashboardLayout>
                } />
                <Route path="/profile" element={
                    <DashboardLayout>
                        <PageWrapper><Profile /></PageWrapper>
                    </DashboardLayout>
                } />
                <Route path="/custom-workout" element={
                    <DashboardLayout>
                        <PageWrapper><CustomWorkoutBuilder /></PageWrapper>
                    </DashboardLayout>
                } />
                <Route path="/muscles" element={
                    <DashboardLayout>
                        <PageWrapper><Muscles /></PageWrapper>
                    </DashboardLayout>
                } />
                <Route path="/exercises" element={
                    <DashboardLayout>
                        <PageWrapper><ExerciseListPage /></PageWrapper>
                    </DashboardLayout>
                } />

                {/* Fallback route */}
                <Route path="*" element={<PageWrapper><h2>404 - Pagina niet gevonden</h2></PageWrapper>} />
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
