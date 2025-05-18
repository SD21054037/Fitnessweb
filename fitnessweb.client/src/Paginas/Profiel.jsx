import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Typography, Form, Input, Select, Button, message, Card } from 'antd';
import './Profiel.css';

const { Title } = Typography;
const { Option } = Select;

export default function Profiel() {
    const { isAuthenticated } = useAuth();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            fetch('http://localhost:5173/api/profile/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setInitialData(data);
                    form.setFieldsValue(data);
                })
                .catch(err => {
                    console.error(err);
                    message.error('Kon profielgegevens niet ophalen');
                });
        }
    }, [isAuthenticated, form]);

    const handleUpdate = async (values) => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5173/api/profile/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(values)
            });

            if (!res.ok) throw new Error('Update mislukt');

            message.success('Gegevens bijgewerkt!');
        } catch (err) {
            message.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className= "profile-page">

            <Card bordered>
                <Title level={3}>Profiel bewerken</Title>

                
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={handleUpdate}
                    initialValues={initialData}
                    message={message}
                    >
                        <Form.Item name="name" label="Naam" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="goal" label="Trainingsdoel">
                            <Select>
                                <Option value="afvallen">Afvallen</Option>
                                <Option value="spiermassa">Spiermassa opbouwen</Option>
                                <Option value="conditie">Conditie verbeteren</Option>
                            <Option value="herstel">Herstel na blessure</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="password" label="Nieuw wachtwoord (optioneel)">
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Opslaan
                            </Button>
                        </Form.Item>
                    </Form>
               
            </Card>
        </div>
    );
}
