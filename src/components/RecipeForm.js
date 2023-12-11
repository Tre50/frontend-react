
import React, { useState } from "react";

export default function RecipeForm({ handleAddRecipe }) {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleBuildClick = () => {
    const newRecipe = {
      name: recipeName,
      ingredients: ingredients,
      instructions: instructions
    };

    // Pass the new recipe data to the parent component
    handleAddRecipe(newRecipe);
  };

  return (
    <div>
      <h2>Recipe Builder</h2>
      <input
        type="text"
        placeholder="Enter Recipe Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Enter Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      ></textarea>
      <br />
      <textarea
        placeholder="Enter Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      ></textarea>
      <br />
      <button
        type="button"
        style={{ backgroundColor: 'green', width: '100px' }}
        onClick={handleBuildClick}
      >
        Build
      </button>
    </div>
  );
}
