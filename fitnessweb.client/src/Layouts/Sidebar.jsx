import { HomeOutlined, UserOutlined, ReadOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 

import './Sidebar.css'; 




const navigationItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <HomeOutlined /> },
    { path: '/custom-workout', label: 'Custom Workout', icon: <span></span> },
    { path: '/muscles', label: 'Muscles', icon: <span></span> },
    { path: '/exercises', label: 'Exercises', icon: <ReadOutlined /> },
    { path: '/profile', label: 'Profile', icon: <UserOutlined /> }
];

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;



    return (
        <div className="sidebar">
            {navigationItems.map(({ path, label, icon }) => {
                const isActive = location.pathname === path;
                return (
                    <Link
                        to={path}
                        key={path}
                        className={`sidebar-item ${isActive ? 'active-item' : ''}`}
                    >
                        {icon}
                        <span>{label}</span>
                    </Link>
                );
            })}

        </div>
    );
};

export default Sidebar;
