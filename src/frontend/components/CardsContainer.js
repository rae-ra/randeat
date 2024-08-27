import React, {useEffect, useState} from 'react';
import Card from './Card';
import './CardsContainer.css';

function CardsContainer({ cardsData, autoplay, autoplaySpeed }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < cardsData.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    useEffect(() => {
        const timer = autoplay && setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % cardsData.length);
        }, autoplaySpeed);

        // Cleanup the timer on unmount or when currentIndex changes
        return () => clearTimeout(timer);
    }, [currentIndex, cardsData.length, autoplay]);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="cards-container">
            <button className="arrow left-arrow" onClick={handlePrev} disabled={currentIndex === 0}>
                &#9664; {/* Left arrow symbol */}
            </button>
            <div
                className="card-wrapper"
                style={{
                    transform: `translateX(${((cardsData.length - 1) / 2 - currentIndex) * 100 / cardsData.length}%)`,
                }}
            >
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        linkText={card.linkText}
                        linkUrl={card.linkUrl}
                        hidden={index !== currentIndex}
                    />
                ))}
            </div>
            <button className="arrow right-arrow" onClick={handleNext} disabled={currentIndex === cardsData.length - 1}>
                &#9654; {/* Right arrow symbol */}
            </button>
            <div className="progress-indicator">
                {cardsData.map((_, index) => (
                    <div
                        key={index}
                        className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={e => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardsContainer;