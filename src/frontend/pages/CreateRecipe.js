import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateRecipe() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleRecipe = async (e) => {
        e.preventDefault();
        try {
            console.log("DOING");
            const token = localStorage.getItem('token');
            const response = await axios.post(
                '/recipes/create-recipe',
                { name: title, ingredients, instructions },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log("DONE");
            navigate('/dashboard'); // Redirect to the dashboard
        } catch (error) {
            console.error("Login error", error);
        }
    };
    return (
        <div>
            <h2>Create a New Recipe</h2>
            <form onSubmit={handleRecipe}>
                <label>
                    Recipe Name:
                    <input
                        type="text"
                        name="name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Ingredients:
                    <
                        textarea
                        name="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    ></textarea>
                </label>
                <br />
                <label>
                    Instructions:
                    <
                        textarea
                        name="instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                    ></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateRecipe;
