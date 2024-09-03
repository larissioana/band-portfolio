import './banner.scss';
import bannerImg from '../../assets/4.jpg';
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation';

const Banner = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            className="banner-container"
        >
            <img src={bannerImg} alt='banner' />
        </motion.div>
    )
}

export default Banner
