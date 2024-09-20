import { useEffect, useRef } from 'react';
import './navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
    const navRef = useRef(null);
    const burgerRef = useRef(null);

    const handleMobileNav = (e) => {
        e.stopPropagation();
        setIsMobileNavOpen((prev) => !prev);
    };


    const handleClickOutside = (event) => {
        if (
            navRef.current &&
            !navRef.current.contains(event.target) &&
            burgerRef.current && !burgerRef.current.contains(event.target)
        ) {
            setIsMobileNavOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navigation" ref={navRef}>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="music">Music</Link>
            <Link to="tour" >Tour </Link>
            <button className="burger" onClick={(handleMobileNav)} ref={burgerRef}>
                {
                    isMobileNavOpen ? <span>X</span>
                        :
                        <div className="burger-lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                }
            </button>
            {
                isMobileNavOpen &&
                <div className="mobile-menu">
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
