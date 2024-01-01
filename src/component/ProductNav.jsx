import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const ProductNav = () => {
    return (
        <Navbar expand="md" className="justify-content-center py-0 productNav d-none d-md-block">
            <div className='container d-flex flex-direction-column py-1'>
                <Container>
                    <Navbar.Collapse>
                        <Nav className='p-2'>
                            <Nav.Item as="li" className='d-flex align-items-center me-5 fw-normal'>
                                <Nav.Link href="#/Product?category=全部" className='p-0'>全部</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className='d-flex align-items-center me-5 fw-normal'>
                                <Nav.Link href="#/Product?category=清新海洋" className='p-0'>清新海洋</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className='d-flex align-items-center me-5 fw-normal'>
                                <Nav.Link href="#/Product?category=木質" className='p-0'>木質</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className='d-flex align-items-center me-5 fw-normal'>
                                <Nav.Link href="#/Product?category=花香調" className='p-0'>花香調</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className='d-flex align-items-center me-5 fw-normal'>
                                <Nav.Link href="#/Product?category=果香調" className='p-0'>果香調</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </div>
        </Navbar>
    )
}

export default ProductNav