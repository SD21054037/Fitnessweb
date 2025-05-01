import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Dashboard.css';
import { AppstoreAddOutlined, UserOutlined, ReadOutlined, SmileOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function Dashboard() {
    const features = [
        {
            title: 'Workout Builder',
            description: 'Create your own training plan based on muscle groups and workout days.',
            path: '/custom-workout',
            icon: <AppstoreAddOutlined style={{ fontSize: '24px' }} />
        },
        {
            title: 'Profile',
            description: 'View or edit your personal data, goals, and preferences.',
            path: '/profile',
            icon: <UserOutlined style={{ fontSize: '24px' }} />
        },
        {
            title: 'Exercises',
            description: 'Browse and manage all available exercises on the site.',
            path: '/exercises',
            icon: <ReadOutlined style={{ fontSize: '24px' }} />
        },
        {
            title: 'Muscles',
            description: 'Learn about all muscle groups and individual muscles.',
            path: '/muscles',
            icon: <SmileOutlined style={{ fontSize: '24px' }} />
        }
    ];

    return (
        <div className="dashboard-container">
            <Title level={2}>Fitness & Education Dashboard</Title>
            <Swiper
                modules={[Navigation, Pagination, Mousewheel]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                mousewheel
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
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
        </div>
    );
}
