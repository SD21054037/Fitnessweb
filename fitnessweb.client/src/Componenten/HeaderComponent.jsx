import React from 'react';
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './HeaderComponent.css';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate = useNavigate();

    const handleNavigate = (muscle) => {
        console.log(muscle);
        localStorage.setItem('selectedMuscle', muscle);
        navigate(`/spierpagina`);
    };

    const items = [
        {
            label: 'Armen',
            key: 'armen',
            icon: <DownOutlined />,
            children: [
                { label: 'Triceps', key: 'triceps', onClick: () => handleNavigate('Triceps') },
                { label: 'Biceps', key: 'biceps', onClick: () => handleNavigate('Biceps') },
                { label: 'Forearms', key: 'forearms', onClick: () => handleNavigate('Forearms') },
            ],
        },
        {
            label: 'Schouders',
            key: 'schouders',
            icon: <DownOutlined />,
            children: [
                { label: 'Front Delts', key: 'frontdelt', onClick: () => handleNavigate('Front Delts') },
                { label: 'Side Delts', key: 'sidedelt', onClick: () => handleNavigate('Side Delts') },
                { label: 'Rear Delts', key: 'reardelt', onClick: () => handleNavigate('Rear Delts') },
            ],
        },
        {
            label: 'Rug',
            key: 'rug',
            icon: <DownOutlined />,
            children: [
                { label: 'Traps', key: 'traps', onClick: () => handleNavigate('Traps') },
                { label: 'Lats', key: 'lats', onClick: () => handleNavigate('Lats') },
                { label: 'Lower Back', key: 'lowerback', onClick: () => handleNavigate('Lower Back') },
                { label: 'Middle Back', key: 'middleback', onClick: () => handleNavigate('Middle Back') },
            ],
        },
        {
            label: 'Benen',
            key: 'benen',
            icon: <DownOutlined />,
            children: [
                { label: 'Quads', key: 'quads', onClick: () => handleNavigate('Quads') },
                { label: 'Hamstrings', key: 'hamstrings', onClick: () => handleNavigate('Hamstrings') },
                { label: 'Calves', key: 'calves', onClick: () => handleNavigate('Calves') },
            ],
        },
        {
            label: 'Borst',
            key: 'borst',
            icon: <DownOutlined />,
            children: [
                { label: 'Upper Chest', key: 'upperchest', onClick: () => handleNavigate('Upper Chest') },
                { label: 'Middle Chest', key: 'middlechest', onClick: () => handleNavigate('Middle Chest') },
                { label: 'Lower Chest', key: 'lowerchest', onClick: () => handleNavigate('Lower Chest') },
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
            <nav className="header__nav">
                <Menu mode="horizontal" items={items} overflowedIndicator={null} className="custom-menu" />
            </nav>
            <div className="header__actions">
                <a href="#login" className="header__button">Login</a>
                <a href="#start-training" className="header__button header__button--highlight">Start Training</a>
            </div>
        </header>
    );
};

export default HeaderComponent;
