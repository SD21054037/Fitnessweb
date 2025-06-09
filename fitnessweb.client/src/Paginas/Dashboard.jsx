import { Card, Typography, Statistic, Row, Col, Button, Progress } from 'antd';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Dashboard.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { motion } from 'framer-motion';


import { AppstoreAddOutlined, UserOutlined, ReadOutlined, SmileOutlined, ReloadOutlined, FireOutlined } from '@ant-design/icons';


const { Title } = Typography;

const tips = [
    "Start your week with a full-body warm-up to avoid injury and boost performance.",
    "Train your back as often as your chest to avoid imbalances.",
    "Don’t skip rest days – they help your muscles grow."
];

const quotes = [
    "Discipline is doing what needs to be done, even when you don’t feel like doing it.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "The pain you feel today will be the strength you feel tomorrow."
];

export default function Dashboard() {
    const navigate = useNavigate();
    const [tipIndex, setTipIndex] = useState(0);
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            message.warning('Log in om verder te gaan');
            navigate('/login');
        }
    }, []);

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning, athlete!';
        if (hour < 18) return 'Good afternoon, athlete!';
        return 'Good evening, athlete!';
    };

    const features = [
        {
            title: 'Workout Builder',
            description: 'Create your own training plan based on muscle groups and workout days.',
            path: '/custom-workout',
            icon: <AppstoreAddOutlined style={{ fontSize: '28px' }} />
        },
        {
            title: 'Profile',
            description: 'View or edit your personal data, goals, and preferences.',
            path: '/profile',
            icon: <UserOutlined style={{ fontSize: '28px' }} />
        },
        {
            title: 'Exercises',
            description: 'Browse and manage all available exercises on the site.',
            path: '/exercises',
            icon: <ReadOutlined style={{ fontSize: '28px' }} />
        },
        {
            title: 'Muscles',
            description: 'Learn about all muscle groups and individual muscles.',
            path: '/muscles',
            icon: <SmileOutlined style={{ fontSize: '28px' }} />
        }
    ];

    const completed = 36;
    const total = 42;

    return (
        <div className="dashboard-background">
        
            <div className="dashboard-container">
                <div className="dashboard-herosection">
            <Title level={1} className="welcome-text">{getGreeting()} 👋</Title>
            


            <Row gutter={16} justify="center" className="dashboard-stats">
                <Col><Statistic title="Total Workouts" value={total} /></Col>
                <Col><Statistic title="Completed" value={completed} /></Col>
                <Col><Statistic title="Calories Burned" value={12450} /></Col>
                <Col><Statistic title="Streak" value={5} suffix="days" /></Col>
                {/*<Col>*/}
                {/*    <Progress type="circle" percent={Math.round((completed / total) * 100)} size={64} status="active"  />*/}
                {/*</Col>*/}
                </Row>
            </div>
            <Title level={2} style={{ marginTop: '40px' }}>Fitness & Education Dashboard</Title>

            <Swiper
                modules={[Navigation, Pagination, Mousewheel, EffectCoverflow]}
                effect="coverflow"
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 200, modifier: 2.5, slideShadows: false }}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                mousewheel
                centeredSlides
                breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 1.5 }, 1024: { slidesPerView: 3 } }}
            >
                {features.map(({ title, description, path, icon }) => (
                    <SwiperSlide key={title}>
                        <Link to={path} className="dashboard-card">
                            <Card hoverable bordered>
                                <div className="card-icon">{icon}</div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </Card>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="dashboard-quote">
                <p>"{quotes[quoteIndex]}"</p>
                <Button type="link" icon={<ReloadOutlined />} onClick={() => setQuoteIndex((quoteIndex + 1) % quotes.length)}>New Quote</Button>
            </div>

            <div className="dashboard-tip">
                <h4>💡 Tip of the Day</h4>
                <p>{tips[tipIndex]}</p>
                <Button type="link" icon={<ReloadOutlined />} onClick={() => setTipIndex((tipIndex + 1) % tips.length)}>New Tip</Button>
            </div>
            </div>
        
        </div>
            );
}
