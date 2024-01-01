import { useState } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <footer className='footerContainer position-relative'>
            <Container>
                <Col md={4}>
                    <div className='position-absolute top-50 start-25'>
                        <p className='fs-2 mb-4 text-secondary fw-semibold'>
                            記得<br /> 訂閱以獲取更多資訊！
                        </p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex'>
                            <Form.Group>
                                <Form.Control
                                    type='email'
                                    placeholder='Your email address'
                                    className='h-100'
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>
                                    請輸入有效的信箱格式!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button type='submit' className='py-3 text-white'>
                                Subscribe
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Container>
        </footer>
    );
};

export default Footer;
