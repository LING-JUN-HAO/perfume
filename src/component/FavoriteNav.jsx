import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const FavoriteNav = () => {
    return (
        <Navbar expand="lg" className="justify-content-center py-0 favoriteNav d-none d-md-block">
            <div className='container-lg d-flex flex-direction-column py-1'>
                <Container>
                    <Navbar.Collapse>
                        <Nav className='p-2'>
                            <Nav.Item as="li" className='d-flex align-items-center me-5 fw-normal'>
                                <span className='text-white'>我的收藏</span>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </div>
        </Navbar>
    )
}

export default FavoriteNav