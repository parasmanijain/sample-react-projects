import { useState } from "react";

const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
];

export const Carousel = () => {
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
