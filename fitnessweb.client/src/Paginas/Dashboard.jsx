import { Card, Typography, Statistic, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Dashboard.css';
import { AppstoreAddOutlined, UserOutlined, ReadOutlined, SmileOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function Dashboard() {
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

    return (
        <div className="dashboard-container">
            <Title level={3}>Welcome back, athlete! 👋</Title>
            

            <Row gutter={16} justify="center" className="dashboard-stats">
                <Col><Statistic title="Total Workouts" value={42} /></Col>
                <Col><Statistic title="Completed Workouts" value={36} /></Col>
                <Col><Statistic title="Calories Burned" value={12450} /></Col>
                <Col><Statistic title="Streak" value={5} suffix="days" /></Col>
            </Row>

            <Title level={2} style={{ marginTop: '40px' }}>Fitness & Education Dashboard</Title>

            <Swiper
                modules={[Navigation, Pagination, Mousewheel, EffectCoverflow]}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 2.5,
                    slideShadows: false
                }}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                mousewheel
                centeredSlides
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 1.5 },
                    1024: { slidesPerView: 3 }
                }}
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
                <p>"Discipline is doing what needs to be done, even when you don’t feel like doing it." – Unknown</p>
            </div>

            <div className="dashboard-tip">
                <h4>💡 Tip of the Day</h4>
                <p>Start your week with a full-body warm-up to avoid injury and boost performance.</p>
            </div>

            
        </div>
    );
}
