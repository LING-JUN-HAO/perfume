import { Container, Col, Row } from 'react-bootstrap';
import saleProduct1 from '../assets/saleProduct1.jpg';
import saleProduct2 from '../assets/saleProduct2.jpg';
import saleProduct3 from '../assets/saleProduct3.jpg';

const Sale = () => {
    return (
        <section className='productContainer bg-light my-5'>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className='overflow-hidden'>
                            <img className='w-100' src={saleProduct1} alt="saleProduct1" />
                        </div>
                        <div>
                            <h3 className='h4 fw-bold' >Poppy & Barley</h3>
                            <p>Jo Malone</p>
                            <p>NT$1,380 <span className='text-decoration-line-through ms-2'>NT$1,580</span></p>
                            <a href="#"></a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='overflow-hidden'>
                            <img className='w-100' src={saleProduct2} alt="saleProduct2" />
                        </div>
                        <div>
                            <h3 className='h4 fw-bold'>Body Wash</h3>
                            <p>Curology</p>
                            <p>NT$1,580</p>
                            <a href="#"></a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='overflow-hidden'>
                            <img className='w-100' src={saleProduct3} alt="saleProduct3" />
                        </div>
                        <div>
                            <h3 className='h4 fw-bold'>Apple Cider Vinegar Capsule</h3>
                            <p>Tonik</p>
                            <p>NT$1,580</p>
                            <a href="#"></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Sale;