import './Home.css'
import Header from '../component/Header';
import Banner from '../component/Banner';
import Introduce from '../component/Introduce';
import Sale from '../component/Sale';
import Blog from '../component/Blog';
import Footer from '../component/Footer';
import FooterNav from '../component/FooterNav';


const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Introduce></Introduce>
            <Sale></Sale>
            <Blog></Blog>
            <Footer></Footer>
            <FooterNav></FooterNav>
        </>
    )
}

export default Home;