import Artist from '../artist/Artist';
import Gallery from '../gallery/Gallery';
import { useEffect } from 'react';

const Home = ({ isMobileNavOpen }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div style={{
            opacity: isMobileNavOpen ? ".3" : "1",
        }}>
            <Artist title={"Behemoth"} subTitle={"Gallery"} />
            <Gallery />
        </div>
    )
}

export default Home
