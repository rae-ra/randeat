import React from 'react';
import logo from '../logo.svg';
import './Home.css';
import CardsContainer from '../components/CardsContainer'; // Import the CardsContainer component

function getCards() {
    return [
        {
            image: logo,
            title: "Welcome to Randeat!",
            description: "Discover unique, randomized recipes that turn cooking into a fun adventure.",
        },
        {
            image: logo,
            title: "Spicy Mango Chicken Stir-Fry",
            description: "A fusion of sweet and spicy flavors that will tantalize your taste buds.",
        },
        {
            image: logo,
            title: "Chocolate Avocado Mousse",
            description: "A healthy and delicious dessert with a rich chocolate flavor.",
        },
        {
            image: logo,
            title: "Maple Bacon Pancakes",
            description: "A sweet and savory breakfast treat that is perfect for any time of day.",
        },
        {
            image: logo,
            title: "Ready to start your culinary journey?",
            description: "Sign up now to create an account and explore even more recipes!",
            linkText: "Sign up to create an account!",
            linkUrl: "/register",
        },

    ];
}

function Home() {
    const cardsData = getCards();

    return (
        <>
            <div className="home-container">
                <CardsContainer cardsData={cardsData} />
            </div>
        </>
    );
}

export default Home;
