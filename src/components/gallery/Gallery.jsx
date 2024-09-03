import './gallery.scss';
import { useEffect, useState } from 'react';
import img from '../../assets/4.jpg';
import img1 from '../../assets/2.jpg'
import img4 from '../../assets/5.jpg'
import img5 from '../../assets/6.jpg'
import img6 from '../../assets/7.jpg'
import img7 from '../../assets/8.jpg'
import img8 from '../../assets/9.jpg'
import img9 from '../../assets/10.jpg'
import img10 from '../../assets/11.jpg'
import img11 from '../../assets/12.jpg'
import img12 from '../../assets/13.jpg'
import img15 from '../../assets/16.jpg'
import img16 from '../../assets/17.jpg'
import img17 from '../../assets/18.jpg'
import img18 from '../../assets/19.jpg'
import img24 from '../../assets/25.jpg'
import img25 from '../../assets/26.jpg'
import img26 from '../../assets/27.jpg'
import img28 from '../../assets/29.jpg'
import img29 from '../../assets/30.jpg'
import img30 from '../../assets/31.jpg'
import img31 from '../../assets/32.jpg'
import img32 from '../../assets/33.jpg'
import img33 from '../../assets/34.jpg'
import img34 from '../../assets/35.jpg'
import img35 from '../../assets/36.jpg'
import img38 from '../../assets/39.jpg';
import img39 from '../../assets/40.jpg';
import img40 from '../../assets/41.jpg';
import img41 from '../../assets/42.jpg';
import img42 from '../../assets/43.jpg';
import img44 from '../../assets/45.jpg';
import img45 from '../../assets/46.jpg';
import img46 from '../../assets/47.jpg';
import img47 from '../../assets/48.jpg';
import img48 from '../../assets/49.jpg';
import { motion } from 'framer-motion';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Blurhash } from 'react-blurhash';
const galleryImages = [
    img,
    img45,
    img24,
    img1,
    img6,
    img4,
    img5,
    img7,
    img8,
    img9,
    img10,
    img11,
    img46,
    img47,
    img12,
    img15,
    img33,
    img16,
    img17,
    img18,
    img25,
    img26,
    img28,
    img29,
    img30,
    img31,
    img32,
    img34,
    img35,
    img38,
    img39,
    img40,
    img41,
    img42,
    img44,
    img48,
];

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [sliderStartIndex, setSliderStartIndex] = useState(0);
    const [imageKey, setImageKey] = useState(0);

    const nextImage = () => {
        const newIndex = (currentImageIndex + 1) % galleryImages.length;
        setCurrentImageIndex(newIndex);
        updateThumbnailSlider(newIndex);
    };

    const prevImage = () => {
        const newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentImageIndex(newIndex);
        updateThumbnailSlider(newIndex);
    };

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setSliderStartIndex(Math.floor(index / 6) * 6);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const updateThumbnailSlider = (newIndex) => {
        const newSliderStartIndex = Math.floor(newIndex / 6) * 6;
        setSliderStartIndex(newSliderStartIndex);
    };

    const showNextImages = () => {
        setSliderStartIndex((prevIndex) =>
            Math.min(prevIndex + 6, galleryImages.length - 6)
        );
    };

    const showPrevImages = () => {
        setSliderStartIndex((prevIndex) => Math.max(prevIndex - 6, 0));
    };
    useEffect(() => {

        setImageKey((prevKey) => prevKey + 1);
    }, [currentImageIndex]);

    const [imageLoaded, setImageLoaded] = useState([]);

    const handleImageLoad = (index) => {
        setImageLoaded((prev) => ({ ...prev, [index]: true }));
    };

    const singleBlurhash = "L69=$^of0g|HXmS29]of0~nP^4TI";
    const AnimatedImage = motion.div;


    return (
        <>
            <div className="gallery-container">
                {
                    galleryImages.map((gallery, index) => {
                        return <AnimatedImage
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            key={index}
                            transition={{ duration: 2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            onClick={() => openModal(index)}
                        >
                            {!imageLoaded[index] && (
                                <Blurhash
                                    hash="L69=$^of0g|HXmS29]of0~nP^4TI"
                                    width="100%"
                                    height="100%"
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                />
                            )}
                            <img
                                src={gallery}
                                alt="Behemoth Gallery"
                                className="image"
                                onLoad={() => handleImageLoad(index)}
                                style={{
                                    position: imageLoaded[index] ? 'relative' : 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: 'auto',
                                    opacity: imageLoaded[index] ? 1 : 0,
                                    transition: 'opacity 0.5s ease-in-out',
                                }}
                            />
                        </AnimatedImage>
                        {/* <MotionLazyLoadImage
                            effect="blur"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            key={index}
                            src={gallery}
                            className="image"
                            alt="Behemoth gallery"
                            onClick={() => openModal(index)}
                        /> */}
                    })
                }
                {
                    isModalOpen && (
                        <div className="modal">
                            <span onClick={closeModal} className="close-btn">
                                ×
                            </span>
                            <div className="modal-content">
                                <img
                                    src={galleryImages[currentImageIndex]}
                                    alt="Full Screen"
                                    className="main-image"
                                    loading='lazy'
                                    key={imageKey}
                                />
                            </div>
                            <div className="buttons">
                                <span
                                    onClick={prevImage}
                                    className="material-symbols-outlined prev-btn"
                                >
                                    arrow_back_ios
                                </span>
                                {
                                    currentImageIndex < galleryImages.length - 1 &&

                                    <span
                                        onClick={nextImage}
                                        className="material-symbols-outlined next-btn"
                                    >
                                        arrow_forward_ios
                                    </span>
                                }
                            </div>
                            <div className="slider-controls">
                                <span
                                    onClick={showPrevImages}
                                    className="material-symbols-outlined prev-btn"
                                >
                                    arrow_back_ios
                                </span>
                                {
                                    currentImageIndex < galleryImages.length - 1 &&
                                    <span
                                        onClick={showNextImages}
                                        className="material-symbols-outlined next-btn"
                                    >
                                        arrow_forward_ios
                                    </span>
                                }
                            </div>
                            <div className="thumbnail-slider">
                                {
                                    galleryImages.slice(sliderStartIndex, sliderStartIndex + 6).map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index}`}
                                            className={`thumbnail ${currentImageIndex === sliderStartIndex + index ? 'active' : ''}`}
                                            onClick={() => setCurrentImageIndex(sliderStartIndex + index)}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}
            </div>
        </>
    )
}

export default Gallery
