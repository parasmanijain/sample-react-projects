import { useState } from "react";

interface CarouselProps {
    images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={goToPrevious}>Previous</button>
            <img src={images[currentIndex]} alt="carousel" />
            <button onClick={goToNext}>Next</button>
        </div>
    );
};
