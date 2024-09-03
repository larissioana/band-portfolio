import './scrollToTop.scss';

const ScrollToTop = () => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <button className="scroll-to-top-btn" >
            <span className="material-symbols-outlined" onClick={scrollTop}>
                arrow_circle_up
            </span>
        </button>
    )
}

export default ScrollToTop
