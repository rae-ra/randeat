import React from 'react';
import slot from '../images/slot_machine.webp';

function About() {
    return (
        <div>
            <h2>About Randeat</h2>
            <p>Randeat is your go-to app for randomized recipes. Like a casino for cooking, it lets you discover new dishes in a fun and unexpected way!</p>
            <img src={slot} alt="randeat"/>
        </div>
    );
}

export default About;
