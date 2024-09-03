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

                <LazyLoadImage effect="blur" src={bannerImg} alt='banner' loading="lazy" width="100%" height="100%" placeholderSrc="../../assets/Behemoth_TheSatanist_02_87eb5bb7-5932-4431-956a-6a0c432dc949 copy 2.png" />
            </motion.div>
        </>
    )
}

export default Banner
