import { useState } from 'react';
import { Form, Input, Select, Button, Typography } from 'antd';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import './Login.css';

const { Title } = Typography;
const { Option } = Select;

export default function Aanmelden() {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Form data:', values);
      
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
                    rules={[{ required: true, message: 'Vul je e-mailadres in!', type: 'email' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Wachtwoord"
                    name="password"
                    rules={[{ required: true, message: 'Kies een wachtwoord!' }]}
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
                    <Button type="primary" htmlType="submit" block>
                        Start je reis!
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    );
}
