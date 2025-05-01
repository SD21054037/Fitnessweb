import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Typography, Form, Input, Select, Button, message, Card } from 'antd';

const { Title } = Typography;
const { Option } = Select;

export default function Profiel() {
    const { isAuthenticated } = useAuth();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            fetch('https://jouwdomein.nl/api/user/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
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
            const res = await fetch('https://jouwdomein.nl/api/user/profile', {
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
        <div style={{ maxWidth: 600, margin: '60px auto' }}>
            <Card bordered>
                <Title level={3}>Profiel bewerken</Title>

                {initialData ? (
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={handleUpdate}
                        initialValues={initialData}
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
                ) : (
                    <p>Gegevens laden...</p>
                )}
            </Card>
        </div>
    );
}
