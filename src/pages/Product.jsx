import './Home.css'
import Header from '../component/Header';
import ProductNav from '../component/ProductNav';
import ProductList from '../component/ProductList';
import Footer from '../component/Footer';
import FooterNav from '../component/FooterNav';

const Product = () => {
    return (
        <>
            <Header></Header>
            <ProductNav></ProductNav>
            <ProductList></ProductList>
            <Footer></Footer>
            <FooterNav></FooterNav>
        </>
    )
}

export default Product;