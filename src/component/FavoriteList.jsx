import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import swalFunc from './swal';

const FavoriteList = () => {
    const [favoriteList, setFavoriteList] = useState(JSON.parse(localStorage.getItem("favorite")) || []);

    const handleOnclick = (item) => {
        swalFunc("移除商品收藏成功!")
        const updatedFavorites = favoriteList.filter((favoriteItem) => favoriteItem.id !== item.id);
        localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
        setFavoriteList(updatedFavorites);
    };

    let productItem = favoriteList.map((item) => {
        const element = <Col lg={3}  xs={6} className='mb-4' key={item.id}>
            <div className='overflow-hidden'>
                <img className='w-100 object-fit-cover' src={item.image} alt={item.title} />
            </div>
            <div>
                <h2 className='fs-5 fw-bold my-2'>{item.title}</h2>
                <p className='mb-1'>{item.category}</p>
                <p className='mb-1'>NT${item.origin_price}<span className='text-decoration-line-through ps-2'>NT${item.price}</span></p>
                <div className='shopIcon'>
                    <span className="material-icons pe-2" onClick={() => (handleOnclick(item))}>favorite</span>
                    <span className="material-icons">shopping_cart</span>
                </div>
            </div>
        </Col>

        return element
    })

    return (
        <Container className='productListContainer py-5'>
            <Row>
                {productItem}
            </Row>
        </Container>
    )
}

export default FavoriteList