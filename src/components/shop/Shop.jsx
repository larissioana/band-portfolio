import './shop.scss';
import img from '../../assets/19.jpg';
import Artist from '../artist/Artist';
import { useEffect } from 'react';

const Shop = ({ isMobileNavOpen }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div className="shop-container" tyle={{
            opacity: isMobileNavOpen ? ".3" : "1"
        }}>
            <Artist title={"Behemoth's Shop"} subTitle={"Coming Soon"} />
            <img src={img} alt="poster" />
        </div>
    )
}

export default Shop
