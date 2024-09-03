import { useEffect, useRef, useState } from 'react';
import './navigation.scss';
import { Link, useLocation } from 'react-router-dom';

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


    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        window.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("click", handleClickOutside)
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);
    const location = useLocation();

    return (
        <nav className="navigation" ref={navRef}>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="music">Music</Link>
            <Link to="tour" >Tour </Link>
            <div className="burger" onClick={handleMobileNav}>
                {
                    !isMobileNavOpen ?
                        <span className="material-symbols-outlined">
                            menu
                        </span>
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
                    <Link to="/tour-dates">Tour </Link>
                </div>
            }
        </nav >
    )
}

export default Navigation
