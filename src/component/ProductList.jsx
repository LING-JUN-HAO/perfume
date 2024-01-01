import { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import swalFunc from './swal';

const fetchData = async (category) => {
    const response = await fetch("https://ec-course-api.hexschool.io/v2/api/hex-project/products/all")
    const data = await response.json()
    const products = data.products
    if (category !== null && category !== "全部") {
        return products.filter(item => item.category === category)
    } else {
        return products
    }
}

const ProductList = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const [product, setProduct] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [favoriteList, setFavoriteList] = useState(JSON.parse(localStorage.getItem("favorite")) || []);


    useEffect(() => {
        const fetchDataAsync = async () => {
            setSpinner(true);
            const data = await fetchData(category);
            setSpinner(false);
            setProduct(data);
        };
        fetchDataAsync();
    }, [category])

    const handleOnclick = (item) => {
        const isAlreadyInFavorites = favoriteList.some((favoriteItem) => favoriteItem.id === item.id);
        let updatedFavorites
        if (isAlreadyInFavorites) {
            swalFunc("移除商品收藏成功!")
            updatedFavorites = favoriteList.filter((favoriteItem) => favoriteItem.id !== item.id);
            localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
        } else {
            swalFunc("商品已加入收藏!")
            updatedFavorites = [...favoriteList, item];
            localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
        }
        setFavoriteList(updatedFavorites);
    };

    let productItem = product.map((item) => {
        const favoriteList = JSON.parse(localStorage.getItem("favorite")) || [];
        const element = <Col lg={3}  xs={6} className='mb-4' key={item.id}>
            <div className='overflow-hidden'>
                <img className='w-100 object-fit-cover' src={item.image} alt={item.title} />
            </div>
            <div>
                <h2 className='fs-5 fw-bold my-2'>{item.title}</h2>
                <p className='mb-1'>{item.category}</p>
                <p className='mb-1'>NT${item.origin_price}<span className='text-decoration-line-through ps-2'>NT${item.price}</span></p>
                {favoriteList.some((favoriteItem) => favoriteItem.id === item.id) ? (<div className='shopIcon'>
                    <span className="material-icons pe-2" onClick={() => (handleOnclick(item))}>favorite</span>
                    <span className="material-icons">shopping_cart</span>
                </div>) : (<div className='shopIcon'>
                    <span className="material-icons pe-2" onClick={() => (handleOnclick(item))}>favorite_border</span>
                    <span className="material-icons">shopping_cart</span>
                </div>)}
            </div>
        </Col>

        return element
    })


    return (
        <Container className='productListContainer py-5'>
            {spinner ? (
                <Row className='d-flex justify-content-center text-center'>
                    <Spinner animation="border" />
                    <p className='mt-2'>資料載入中</p>
                </Row>
            ) : (
                <Row>
                    {productItem}
                </Row>
            )}
        </Container>
    )
}

export default ProductList