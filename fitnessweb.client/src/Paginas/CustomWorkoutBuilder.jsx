import { useState, Suspense } from 'react';
import { Steps, Button, Select, Card, Typography } from 'antd';
import MusclePreviewModal from '../Componenten/MusclePreviewModal';
import muscleGroups from '../data/muscleGroupsData';
import exerciseSuggestions from '../data/exerciseSuggestions';
import './CustomWorkoutBuilder.css';

const { Step } = Steps;
const { Option } = Select;
const { Title } = Typography;

export default function CustomWorkoutBuilder() {
    const [currentStep, setCurrentStep] = useState(0);
    const [muscles, setMuscles] = useState([]);
    const [days, setDays] = useState(3);
    const [workouts, setWorkouts] = useState({});
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewPath, setPreviewPath] = useState('');

    const dayOptions = [3, 4, 5, 6];

    const handleNext = () => setCurrentStep(currentStep + 1);
    const handlePrev = () => setCurrentStep(currentStep - 1);

    const handleMuscleChange = (selection) => {
        setMuscles(selection);
    };

    const handleDaysChange = (value) => setDays(value);

    const handleExerciseChange = (day, muscle, value) => {
        setWorkouts(prev => ({
            ...prev,
            [day]: { ...prev[day], [muscle]: value }
        }));
    };

    const steps = [
        {
            title: 'Spiergroepen',
            content: (
                <div className="muscle-card-grid">
                    {muscleGroups.map(({ name, path }) => (
                        <Card
                            key={name}
                            className={`muscle-card ${muscles.includes(name) ? 'selected' : ''}`}
                            onClick={() =>
                                handleMuscleChange(
                                    muscles.includes(name)
                                        ? muscles.filter((m) => m !== name)
                                        : [...muscles, name]
                                )
                            }
                            hoverable
                            onDoubleClick={() => {
                                setPreviewPath(path);
                                setPreviewVisible(true);
                            }}
                        >
                            <img src={`/assets/muscle-thumbs/${name.toLowerCase()}.png`} alt={name} className="muscle-image" />
                            <p>{name}</p>
                        </Card>
                    ))}
                </div>
            )
        },
        {
            title: 'Trainingsdagen',
            content: (
                <Select value={days} onChange={handleDaysChange} style={{ width: 200 }}>
                    {dayOptions.map(d => (
                        <Option key={d} value={d}>{d} dagen per week</Option>
                    ))}
                </Select>
            )
        },
        {
            title: 'Stel je workouts samen',
            content: (
                <div>
                    {[...Array(days)].map((_, i) => {
                        const dayLabel = `Dag ${i + 1}`;
                        return (
                            <Card key={i} title={dayLabel} style={{ marginBottom: 16 }}>
                                {muscles.map((muscle) => (
                                    <div key={muscle} style={{ marginBottom: 12 }}>
                                        <label>{muscle}</label>
                                        <Select
                                            mode="multiple"
                                            style={{ width: '100%' }}
                                            placeholder={`Selecteer oefeningen voor ${muscle}`}
                                            value={workouts[dayLabel]?.[muscle] || []}
                                            onChange={(value) => handleExerciseChange(dayLabel, muscle, value)}
                                        >
                                            {(exerciseSuggestions[muscle] || []).map((exercise) => (
                                                <Option key={exercise} value={exercise}>{exercise}</Option>
                                            ))}
                                        </Select>
                                    </div>
                                ))}
                            </Card>
                        );
                    })}
                </div>
            )
        },
        {
            title: 'Overzicht',
            content: (
                <div>
                    {Object.entries(workouts).map(([day, muscles]) => (
                        <Card key={day} title={day} style={{ marginBottom: 16 }}>
                            {Object.entries(muscles).map(([muscle, exercises]) => (
                                <p key={muscle}><strong>{muscle}:</strong> {exercises.join(', ')}</p>
                            ))}
                        </Card>
                    ))}
                </div>
            )
        }
    ];

    return (
        <div className="custom-workout-builder">
        <div className="builder-container">

            
            <Title level={2}>Custom Workout Builder</Title>

            <Steps current={currentStep} style={{ marginBottom: 40 }}>
                {steps.map((item, index) => (
                    <Step key={index} title={item.title} />
                ))}
            </Steps>

            <div className="step-content">{steps[currentStep].content}</div>

            <div className="builder-buttons">
                {currentStep > 0 && <Button onClick={handlePrev}>Terug</Button>}
                {currentStep < steps.length - 1 && (
                    <Button type="primary" onClick={handleNext}>Volgende</Button>
                )}
                {currentStep === steps.length - 1 && (
                    <Button type="primary" onClick={() => console.log('Schema klaar:', workouts)}>
                        Schema opslaan
                    </Button>
                )}
            </div>

            <MusclePreviewModal
                visible={previewVisible}
                onClose={() => setPreviewVisible(false)}
                glbPath={previewPath}
            />
            </div>
        </div>
    );
}
