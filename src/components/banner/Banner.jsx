import './banner.scss';
import bannerImg from '../../assets/4.jpg';
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';

const Banner = () => {
    const [loaded, setLoaded] = useState(false);
    const handleLoad = () => {
        setLoaded(true);
    }
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            className="banner-container"
        >
            <LazyLoadImage effect="blur" src={bannerImg} alt='banner' onLoad={handleLoad} />
        </motion.div>
    )
}

export default Banner
