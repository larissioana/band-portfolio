import { useEffect, useRef, useState } from 'react';
import './navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
    const [scrolling, setScrolling] = useState(false);
    const navRef = useRef(null);

    const handleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsMobileNavOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, []);

    return (
        <nav className="navigation" ref={navRef}>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="music">Music</Link>
            <Link to="tour" >Tour </Link>
            <div className="burger" onClick={handleMobileNav}>
                {
                    !isMobileNavOpen ?
                        <>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </>
                        :
                        <span>X</span>
                }
            </div>
            {
                isMobileNavOpen &&
                <div className="mobile-menu show">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/music">Music</Link>
                    <Link to="/tour">Tour </Link>
                </div>
            }
        </nav>
    )
}

export default Navigation
