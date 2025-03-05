import React from 'react';
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './HeaderComponent.css';

const items = [
    {
        label: 'Armen',
        key: 'armen',
        icon: <DownOutlined />,
        children: [
            { label: 'Triceps', key: 'triceps' },
            { label: 'Biceps', key: 'biceps' },
            { label: 'Forearms', key: 'forearms' },
        ],
    },
    {
        label: 'Schouders',
        key: 'schouders',
        icon: <DownOutlined />,
        children: [
            { label: 'Front Delts', key: 'frontdelt' },
            { label: 'Side Delts', key: 'sidedelt' },
            { label: 'Rear Delts', key: 'reardelt' },
        ],
    },
    {
        label: 'Rug',
        key: 'rug',
        icon: <DownOutlined />,
        children: [
            { label: 'Traps', key: 'traps' },
            { label: 'Lats', key: 'lats' },
            { label: 'Lower Back', key: 'lowerback' },
            { label: 'Middle Back', key: 'middleback' },
        ],
    },
    {
        label: 'Benen',
        key: 'benen',
        icon: <DownOutlined />,
        children: [
            { label: 'Quads', key: 'quads' },
            { label: 'Hamstrings', key: 'hamstrings' },
            { label: 'Calves', key: 'calves' },
        ],
    },
    {
        label: 'Borst',
        key: 'borst',
        icon: <DownOutlined />,
        children: [
            { label: 'Upper Chest', key: 'upperchest' },
            { label: 'Middle Chest', key: 'middlechest' },
            { label: 'Lower Chest', key: 'lowerchest' },
        ],
    },
];

function HeaderComponent() {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/">
                    <img src="/logo.png" alt="Fitness & Education Logo" />
                </a>
            </div>
            <nav className="header__nav">
                <Menu
                    mode="horizontal"
                    items={items}
                    overflowedIndicator={null} 
                    className="custom-menu"
                    
                />
            </nav>
            <div className="header__actions">
                <a href="#login" className="header__button">Login</a>
                <a href="#start-training" className="header__button header__button--highlight">Start Training</a>
            </div>
        </header>
    );
}

export default HeaderComponent;