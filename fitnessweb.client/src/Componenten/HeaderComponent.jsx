import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './HeaderComponent.css';
import { useMuscle } from '../hooks/MuscleContext';
import muscleGroups from '../data/muscleGroupsData';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate = useNavigate();
    const { selectMuscle, selectMuscleGroup } = useMuscle();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleSubmenu = (menu) => {
        setActiveSubmenu(prev => prev === menu ? null : menu);
    };


    const findMuscleGroupByMuscle = (muscleName) => {
        const groupEntry = Object.entries(muscleGroups).find(([groupName, group]) =>
            group.muscles.includes(muscleName)
        );
        return groupEntry ? groupEntry[0] : null;
    };

    const handleMuscleNavigate = (muscleName) => {
        const group = findMuscleGroupByMuscle(muscleName);
        if (group) {
            selectMuscle(muscleName);
            selectMuscleGroup(group);
            navigate('/spierpagina');
        } else {
            console.warn('Muscle group not found for:', muscleName);
        }
    };

    const handleExerciseNavigate = (exerciseName) => {
        navigate(`/exercises/${exerciseName.toLowerCase().replaceAll(' ', '-')}`);
    };

    const muscleItems = [
        {
            key: 'shoulders',
            label: 'Shoulders',
            children: [
                { key: 'front-delts', label: 'Front Delts', onClick: () => handleMuscleNavigate('Front_delts') },
                { key: 'side-delts', label: 'Side Delts', onClick: () => handleMuscleNavigate('Side_delts') },
                { key: 'rear-delts', label: 'Rear Delts', onClick: () => handleMuscleNavigate('Rear_delts') },
            ],
        },
        {
            key: 'arms',
            label: 'Arms',
            children: [
                { key: 'biceps', label: 'Biceps', onClick: () => handleMuscleNavigate('Biceps_brachii') },
                { key: 'triceps', label: 'Triceps', onClick: () => handleMuscleNavigate('Triceps_brachii') },
                { key: 'brachialis', label: 'Brachialis', onClick: () => handleMuscleNavigate('Brachialis') },
            ],
        },
        {
            key: 'chest',
            label: 'Chest',
            children: [
                { key: 'chest-all', label: 'Chest', onClick: () => handleMuscleNavigate('Chest') },
            ],
        },
        {
            key: 'back',
            label: 'Back',
            children: [
                { key: 'lats', label: 'Lats', onClick: () => handleMuscleNavigate('Latissimus_dorsi') },
                { key: 'traps', label: 'Traps', onClick: () => handleMuscleNavigate('Traps') },
                { key: 'rhomboids', label: 'Rhomboids', onClick: () => handleMuscleNavigate('Rhomboid_major') },
            ],
        },
        {
            key: 'legs',
            label: 'Legs',
            children: [
                { key: 'quads', label: 'Quads', onClick: () => handleMuscleNavigate('Rectus_femoris') },
                { key: 'hamstrings', label: 'Hamstrings', onClick: () => handleMuscleNavigate('Biceps_femoris') },
                { key: 'calves', label: 'Calves', onClick: () => handleMuscleNavigate('Gastrocnemius') },
            ],
        },
        {
            key: 'core',
            label: 'Core',
            children: [
                { key: 'abs', label: 'Abs', onClick: () => handleMuscleNavigate('Rectus_abdominis') },
                { key: 'obliques', label: 'Obliques', onClick: () => handleMuscleNavigate('Obliques') },
            ],
        },
    ];

    const exerciseItems = [
        {
            key: 'shoulders-ex',
            label: 'Shoulders',
            children: [
                { key: 'overhead-press', label: 'Overhead Press', onClick: () => handleExerciseNavigate('Overhead Press') },
                { key: 'lateral-raise', label: 'Lateral Raise', onClick: () => handleExerciseNavigate('Lateral Raise') },
            ],
        },
        {
            key: 'arms-ex',
            label: 'Arms',
            children: [
                { key: 'bicep-curl', label: 'Bicep Curl', onClick: () => handleExerciseNavigate('Bicep Curl') },
                { key: 'tricep-pushdown', label: 'Tricep Pushdown', onClick: () => handleExerciseNavigate('Tricep Pushdown') },
            ],
        },
        {
            key: 'chest-ex',
            label: 'Chest',
            children: [
                { key: 'chest-fly', label: 'Chest Fly', onClick: () => handleExerciseNavigate('Chest Fly') },
            ],
        },
        {
            key: 'back-ex',
            label: 'Back',
            children: [
                { key: 'seated-row', label: 'Seated Row', onClick: () => handleExerciseNavigate('Seated Row') },
            ],
        },
        {
            key: 'legs-ex',
            label: 'Legs',
            children: [
                { key: 'romanian-deadlift', label: 'Romanian Deadlift', onClick: () => handleExerciseNavigate('Romanian Deadlift') },
                { key: 'lunge', label: 'Lunge', onClick: () => handleExerciseNavigate('Lunge') },
                { key: 'leg-extension', label: 'Leg Extension', onClick: () => handleExerciseNavigate('Leg Extension') },
            ],
        },
    ];

    return (
        

        <header className="header">
            
            <div className="header__logo">
                <a href="/">
                    <img src="/logo.png" alt="Fitness & Education Logo" />
                </a>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
            )}

            {isMenuOpen && (
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>

                   

                   

                    <div className="mobile-menu__content">
                        <p onClick={() => toggleSubmenu('muscles')}>
                            Muscles <span>{activeSubmenu === 'muscles' ? '˄' : '˅'}</span>
                        </p>
                        {activeSubmenu === 'muscles' && (
                            <div className="mobile-submenu">
                                {muscleItems.map(group => (
                                    <div key={group.key}>
                                        <p className="mobile-submenu__group">{group.label}</p>
                                        <ul>
                                            {group.children.map(item => (
                                                <li key={item.key} onClick={() => { item.onClick(); setIsMenuOpen(false); }}>
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        <p onClick={() => toggleSubmenu('exercises')}>
                            Exercises <span>{activeSubmenu === 'exercises' ? '˄' : '˅'}</span>
                        </p>
                        {activeSubmenu === 'exercises' && (
                            <div className="mobile-submenu">
                                {exerciseItems.map(group => (
                                    <div key={group.key}>
                                        <p className="mobile-submenu__group">{group.label}</p>
                                        <ul>
                                            {group.children.map(item => (
                                                <li key={item.key} onClick={() => { item.onClick(); setIsMenuOpen(false); }}>
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        <p onClick={() => { navigate('/login'); setIsMenuOpen(false); }}>Login</p>
                    </div>
                </div>
            )}

                <div className="hamburger-icon" onClick={() => setIsMenuOpen(true)}>
                    <svg width="28" height="28" viewBox="0 0 100 80" fill="white">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </div>
            <nav className="header__nav">
                <Dropdown menu={{ items: muscleItems }} placement="bottomLeft" trigger={["hover"]}>
                        <a onClick={(e) => {
                            e.preventDefault();
                            navigate('/muscles');
                        }
                        
                        
                        
                        } className="nav-dropdown">Muscles <DownOutlined /></a>
                </Dropdown>
                <Dropdown menu={{ items: exerciseItems }} placement="bottomLeft" trigger={["hover"]}>
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/exercises');
                        }}
                        className="nav-dropdown"
                    >
                        Exercises <DownOutlined />
                    </a>

                </Dropdown>
                 </nav>
                <div className="header__actions">
                    <Link to="/login" className="header__button">Login</Link>
            
                </div>

        </header>
    );
};

export default HeaderComponent;
