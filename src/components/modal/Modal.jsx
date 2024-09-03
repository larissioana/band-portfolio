import './modal.scss';

const Modal = ({
    closeModal,
    galleryImages,
    prevImage,
    nextImage,
    currentImageIndex,
    setCurrentImageIndex,
    sliderStartIndex,
    showNextImages,
    showPrevImages,
    imageKey
}) => {
    return (
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
                    style={{
                        fontSize: "1.5rem"
                    }}
                >
                    {"<"}
                </span>
                {
                    currentImageIndex < galleryImages.length - 1 &&

                    <span
                        onClick={nextImage}
                        style={{
                            fontSize: "1.5rem"
                        }}
                    >
                        {">"}
                    </span>
                }
            </div>
            <div className="slider-controls">
                <span
                    onClick={showPrevImages}

                >
                    {"<"}
                </span>
                {
                    currentImageIndex < galleryImages.length - 1 &&
                    <span
                        onClick={showNextImages}

                    >
                        {">"}
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
    )
}

export default Modal
