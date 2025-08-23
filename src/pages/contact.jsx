import React from 'react';
import ContactForm from '../components/molecules/ContactForm';
import 'antd/dist/reset.css';

const App = () => {
    const handleSubmit = async (values) => {
        console.log('Form values:', values);
    };

    return (
        <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="highlight" style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                textAlign: 'center',
                animation: 'fadeIn 1s ease-in',
                background: 'linear-gradient(120deg, #7928CA, #FF0080)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}>
                Contact
            </h1>

            <ContactForm onSubmit={handleSubmit} />
        </div>
    );
};

export default App;