import { Container, Col, Row } from 'react-bootstrap';
import blogImg from '../assets/blogImg.jpg'

const Blog = () => {
    return (
        <Container className='blog d-flex my-5'>
            <Row>
                <Col md={8}>
                    <img className='w-100' src={blogImg} alt="Bottle-Recycling" />
                </Col>
                <Col md={4} className='m-auto'>
                    <div className='blogContent'>
                        <h3 className='h3 fw-bold pt-3 pt-md-0'>Bottle-Recycling</h3>
                        <p className='fs-6'>Recycle your used empty bottles and be rewarded!</p>
                        <p className='fs-6'>For the past 10 years, we have collected over 800,000 bottles through the Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment. For the past 10 years, we have collected over 800,000 bottles through the Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.</p>
                        <a href='#' className='text-decoration-none more'>
                            查看更多
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;
