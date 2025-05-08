import { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import './Login.css';

const { Title } = Typography;

export default function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        setLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (!res.ok) throw new Error('Inloggen mislukt');

            const data = await res.json();
            localStorage.setItem('token', data.token);

            message.success('Je bent ingelogd!');
            navigate('/dashboard');
        } catch (err) {
            message.error(err.message || 'Er ging iets mis');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="login-page">

            <div className="auth-hero">
                <DotLottieReact
                    src="https://lottie.host/9bebdae2-78c4-4bc5-b352-cc17348b0c4d/3xzmFuptup.lottie"
                    loop
                    autoplay
                />
                <h1>Welkom terug!</h1>
                <p>Log in om je vooruitgang te volgen en slimmer te trainen.</p>
                
            </div>
        <div className="login-container">
            <Title level={2} style={{ textAlign: 'center' }}>Inloggen</Title>

                <Form layout="vertical" onFinish={handleLogin}>
                    <Form.Item
                        label="E-mailadres"
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Vul een geldig e-mailadres in!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Wachtwoord"
                        name="password"
                        rules={[{ required: true, message: 'Wachtwoord is verplicht!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            Inloggen
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    );
}
