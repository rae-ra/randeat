// Card.js
import React from 'react';
import './Card.css';

function Card({ image, title, description, linkText, linkUrl, hidden}) {
    return (
        <div className={hidden ? "card" : "card hidden"}>
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <div>
                    {description}
                    <br/>
                    {linkText && linkUrl && (
                        <a href={linkUrl} className="register-link">{linkText}</a>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Card;
