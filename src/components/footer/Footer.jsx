import './footer.scss';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isHomeOrShop = location.pathname === "/" || location.pathname === "/shop";


    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="left">
                    {
                        isHomeOrShop ?

                            <p>
                                <a href="https://www.behemoth.pl/" target="_blank">Visit Behemoth's -  Official Website Here</a>
                            </p>
                            :
                            <p style={{
                                borderBottom: "1.5px outset #FFF",
                            }}>Visit Behemoth's -  </p>
                    }
                </div>
                <div className="right">
                    {
                        isHomeOrShop ?
                            <>

                                <p></p>
                                <p>
                                    <a href="https://miluta.ro/ro/" target="_blank">

                                    {location.pathname === '/' ? "Photos by" : "photo by"} Miluță Flueraș.
                                    </a>
                                </p>
                            </>
                            :
                            <>
                                <p>
                                    <a href="https://www.behemoth.pl/" target='_blank'> Official Website Here</a>
                                </p>
                            </>
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer
