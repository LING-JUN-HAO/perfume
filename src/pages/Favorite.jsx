import './Home.css'
import Header from '../component/Header';
import FavoriteNav from '../component/FavoriteNav';
import FavoriteList from '../component/FavoriteList';
import Footer from '../component/Footer';
import FooterNav from '../component/FooterNav';

const Favorite = () => {
    return (
        <>
            <Header></Header>
            <FavoriteNav></FavoriteNav>
            <FavoriteList></FavoriteList>
            <Footer></Footer>
            <FooterNav></FooterNav>
        </>
    )
}

export default Favorite;