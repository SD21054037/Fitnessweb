import { useState } from 'react';
import { Form, Input, Select, Button, Typography } from 'antd';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import './Login.css';

const { Title } = Typography;
const { Option } = Select;

export default function Signup() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Registration failed');
            }

            const data = await res.json();
            localStorage.setItem('token', data.token);

            message.success('Account created! You are now logged in.');
            navigate('/dashboard');
        } catch (err) {
            message.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-page">
            <div className="auth-hero">
                <div className="auth-hero-image">
                    <DotLottieReact
                        src="https://lottie.host/6440dbb7-3b33-48c4-9421-df750c19ee15/KKzAOEydAC.lottie"
                        loop
                        autoplay
                    />
                </div>
                <div className="auth-hero-text">
                    <h1>Join Fitness & Education</h1>
                    <p>Discover your body. Train smarter. Reach your goals.</p>
                </div>
            </div>
            <div className="signup-container">
                <Title level={2} style={{ textAlign: 'center' }}>Sign Up</Title>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    autoComplete="off"
                    validateTrigger="onChange"
                >
                    <Form.Item
                        label="First Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please enter your email!' },
                            { type: 'email', message: 'Please enter a valid email!' },
                            ({ getFieldValue }) => ({
                                async validator(_, value) {
                                    if (!value) return Promise.resolve();

                                    const res = await fetch(`/api/auth/email-exists?email=${encodeURIComponent(value)}`);
                                    const { exists } = await res.json();

                                    return exists
                                        ? Promise.reject(new Error('Email is already in use'))
                                        : Promise.resolve();
                                },
                            }),
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Please choose a password!' },
                            { min: 6, message: 'Password must be at least 6 characters.' },
                            {
                                pattern: /^(?=.*[A-Z])(?=.*\d)/,
                                message: 'Password must contain at least one uppercase letter and one number.',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Training Goal"
                        name="goal"
                        rules={[{ required: true, message: 'Please select a goal!' }]}
                    >
                        <Select placeholder="Select your goal">
                            <Option value="afvallen">Lose Weight</Option>
                            <Option value="spiermassa">Build Muscle</Option>
                            <Option value="conditie">Improve Conditioning</Option>
                            <Option value="herstel">Post-Injury Recovery</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="What do you want to achieve?" name="notes">
                        <Input.TextArea rows={4} placeholder="e.g. get stronger, stay injury-free, etc." />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            Start your journey!
                        </Button>
                    </Form.Item>
                </Form>

                <div className="signup-footer">
                    <p>Already have an account? <a href="/login">Log in here</a></p>
                    <p>By signing up, you agree to our <a href="/voorwaarden">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
    );
}
