import './banner.scss';
import bannerImg from '../../assets/4.jpg';
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Banner = () => {

    return (
        <>
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                className="banner-container"
            >

                <LazyLoadImage effect="blur" src={bannerImg} alt='banner' loading="lazy" width="100%" height="100%" />
            </motion.div>
        </>
    )
}

export default Banner
