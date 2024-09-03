import './banner.scss';
import bannerImg from '../../assets/4.jpg';
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Blurhash } from 'react-blurhash';
import { useEffect, useState } from 'react';

const Banner = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = bannerImg;
    }, [bannerImg])
    return (
        <>
            <motion.div
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                className="banner-container"
            >
                {
                    !imageLoaded &&
                    <Blurhash
                        hash="L69=$^of0g|HXmS29]of0~nP^4TI"
                        width="100%"
                        height="100%"
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                }
                {
                    imageLoaded &&
                    <img src={bannerImg} style={{ display: imageLoaded ? 'block' : 'none' }} alt='banner' onLoad={() => setImageLoaded(true)} />
                }
            </motion.div>
        </>
    )
}

export default Banner
