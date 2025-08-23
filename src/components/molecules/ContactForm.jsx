import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import './css/ContactForm.css';

const { TextArea } = Input;

const ContactForm = ({ onSubmit }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            await onSubmit(values);
            message.success('Message sent successfully!');
            form.resetFields();
        } catch (error) {
            message.error('Failed to send message. Please try again.');
            console.error('Form submission error:', error);
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="contact-form"
            size="large"
        >
            <div className="form-row">
                <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                        },
                    ]}
                    style={{ flex: 1, marginRight: '16px' }}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="First Name"
                    />
                </Form.Item>

                <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                        },
                    ]}
                    style={{ flex: 1 }}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Last Name"
                    />
                </Form.Item>
            </div>

            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not a valid email!',
                    },
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input
                    prefix={<MailOutlined />}
                    placeholder="Email"
                    type="email"
                />
            </Form.Item>

            <Form.Item
                name="message"
                label="Message"
                rules={[
                    {
                        required: true,
                        message: 'Please input your message!',
                    },
                    {
                        min: 10,
                        message: 'Message must be at least 10 characters long!',
                    },
                ]}
            >
                <TextArea
                    rows={6}
                    placeholder="Your message here..."
                    showCount
                    maxLength={1000}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ width: '100%' }}
                >
                    Send Message
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;