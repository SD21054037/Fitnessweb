import { useState } from 'react';
import { Form, Input, Select, Button, Typography } from 'antd';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';


import './Login.css';

const { Title } = Typography;
const { Option } = Select;

export default function Aanmelden() {
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
                throw new Error(data.error || 'Registratie mislukt');
            }

            const data = await res.json();
            localStorage.setItem('token', data.token); 

            message.success('Account aangemaakt! Je bent ingelogd.');
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
                <DotLottieReact
                    src="https://lottie.host/6440dbb7-3b33-48c4-9421-df750c19ee15/KKzAOEydAC.lottie"
                    loop
                    autoplay
                    
                    
                />
        <h1>Word lid van Fitness & Education</h1>
        <p>Ontdek je lichaam. Train slimmer. Bereik je doelen.</p>
        
    </div>
        <div className="signup-container">
            <Title level={2} style={{ textAlign: 'center' }}>Meld je aan</Title>

            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
                validateTrigger="onChange"
            >
                <Form.Item
                    label="Voornaam"
                    name="name"
                    rules={[{ required: true, message: 'Vul je naam in!' }]}
                >
                    <Input />
                </Form.Item>

                    <Form.Item
                        label="E-mailadres"
                        name="email"
                        hasFeedback
                        rules={[
                            { required: true, message: 'Vul je e-mailadres in!' },
                            { type: 'email', message: 'Voer een geldig e-mailadres in!' },
                            ({ getFieldValue }) => ({
                                async validator(_, value) {
                                    if (!value) return Promise.resolve();

                                    const res = await fetch(`/api/auth/email-exists?email=${encodeURIComponent(value)}`);
                                    const { exists } = await res.json();

                                    return exists
                                        ? Promise.reject(new Error('E-mailadres is al in gebruik'))
                                        : Promise.resolve();
                                },
                            }),
                        ]}
                   >
                    <Input />
                </Form.Item>




                    <Form.Item
                        label="Wachtwoord"
                        name="password"
                        rules={[
                            { required: true, message: 'Kies een wachtwoord!' },
                            { min: 6, message: 'Wachtwoord moet minstens 6 tekens bevatten.' },
                            {
                                pattern: /^(?=.*[A-Z])(?=.*\d)/,
                                message: 'Wachtwoord moet minstens 1 hoofdletter en 1 cijfer bevatten.',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Bevestig wachtwoord"
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Bevestig je wachtwoord!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Wachtwoorden komen niet overeen!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>


                <Form.Item
                    label="Trainingsdoel"
                    name="goal"
                    rules={[{ required: true, message: 'Selecteer een doel!' }]}
                >
                    <Select placeholder="Kies je doel">
                        <Option value="afvallen">Afvallen</Option>
                        <Option value="spiermassa">Spiermassa opbouwen</Option>
                        <Option value="conditie">Conditie verbeteren</Option>
                        <Option value="herstel">Herstel na blessure</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Wat wil je bereiken?" name="notes">
                    <Input.TextArea rows={4} placeholder="Bijv. sterker worden, blessurevrij blijven, etc." />
                </Form.Item>

                <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            Start je reis!
                        </Button>

                </Form.Item>
            </Form>
            </div>
        </div>
    );
}
