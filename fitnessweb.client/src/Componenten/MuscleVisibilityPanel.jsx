import React from 'react';
import { Dropdown, Menu, Checkbox, Button } from 'antd';

const MuscleVisibilityPanel = ({ hiddenMuscles, toggleMuscleVisibility, showAll, hideAll }) => {
    const allMuscles = Object.keys(hiddenMuscles || {});

    const items = [
        {
            key: 'showAll',
            label: <Button type="link" onClick={showAll}>Show All</Button>,
        },
        {
            key: 'hideAll',
            label: <Button type="link" onClick={hideAll}>Hide All</Button>,
        },
        ...allMuscles.map((muscle) => ({
            key: muscle,
            label: (
                <Checkbox
                    checked={hiddenMuscles[muscle]}
                    onChange={() => toggleMuscleVisibility(muscle)}
                >
                    {muscle.replaceAll('_', ' ')}
                </Checkbox>
            ),
        }))
    ];

    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <Button style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: '#1194a3',
                color: 'white',
                borderRadius: '20px',
                padding: '10px 20px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                zIndex: 1000
            }}>
                Show/Hide Muscles
            </Button>
        </Dropdown>
    );
};

export default MuscleVisibilityPanel;