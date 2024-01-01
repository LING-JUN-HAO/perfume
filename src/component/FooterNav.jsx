import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandImg from '../assets/d’PerfumewWhite.png'

const FooterNav = () => {
    return (
        <Navbar expand="lg" className="justify-content-center py-0 footerNav">
            <div className='container-lg d-flex flex-direction-column py-1'>
                <Navbar.Brand href="#home">
                    <img
                        src={brandImg}
                        alt="香水品牌圖示"
                    />
                    <span className='text-white ps-3'>© 2020. All Rights Reserved.</span>
                </Navbar.Brand>
                <Container>
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Item as="li" className='d-flex align-items-center ms-4 fw-normal'>
                                <Nav.Link href="#Product" className='p-0'>Product</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className='d-flex align-items-center ms-4 fw-normal'>
                                <Nav.Link href="#Login" className='p-0'>Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className='d-flex align-items-center ms-4 fw-normal'>
                                <Nav.Link href="#Wishlist" className='p-0'>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </div>
        </Navbar>
    )
}

export default FooterNav