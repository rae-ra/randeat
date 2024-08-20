import React from 'react';

function Dashboard() {
    return (
        <div>
            <h2>Create a New Recipe</h2>
            <form>
                <label>
                    Recipe Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Ingredients:
                    <textarea name="ingredients"></textarea>
                </label>
                <br />
                <label>
                    Instructions:
                    <textarea name="instructions"></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Dashboard;