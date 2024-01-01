import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandImg from '../assets/d’Perfume.png'

const Header = () => {
    return (
        <Navbar expand="md" className="bg-white justify-content-center py-0 sticky-top headerNav">
            <Container className='container d-flex flex-direction-column p-0 py-md-1'>
                <Navbar.Brand href="#home">
                    <img className='ps-3 pd-md-0'
                        src={brandImg}
                        alt="香水品牌圖示"
                    />
                </Navbar.Brand>
                <div className='d-flex d-md-none align-items-center'>
                    <div className='navShopIcon'>
                        <span className="material-icons d-block d-md-none me-3">shopping_cart</span>
                    </div>
                    <Navbar.Toggle className='me-3 me-md-0' aria-controls="navbar-nav" />
                </div>
                <Container className='p-0 p-md-2'>
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Item as="li" className='d-flex align-items-center justify-content-center ms-0 ms-md-4 fw-normal my-0 my-md-2 p-3 p-md-0'>
                                <span className="material-icons d-md-block d-none">store</span>
                                <Nav.Link href="#Product?category=全部" className='p-0'>Product</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className='d-flex align-items-center justify-content-center ms-0 ms-md-4 fw-normal my-0 my-md-2 p-3 p-md-0'>
                                <span className="material-icons d-md-block d-none">person</span>
                                <Nav.Link href="#Login" className='p-0'>Log in</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className='d-flex align-items-center justify-content-center ms-0 ms-md-4 fw-normal my-0 my-md-2 p-3 p-md-0'>
                                <span className="material-icons d-md-block d-none">favorite</span>
                                <Nav.Link href="#Wishlist" className='p-0'>Wishlist</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className='d-flex align-items-center justify-content-center ms-0 ms-md-4 fw-normal my-0 my-md-2 p-3 p-md-0'>
                                <span className="material-icons d-md-block d-none">shopping_cart</span>
                                <Nav.Link href="#Cart" className='p-0'>Cart(3)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    )
}

export default Header