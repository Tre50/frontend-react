import React, { useState, useEffect } from "react";


export default function RecipeList({ token }) {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');

  useEffect(() => {
    fetch('https://backend-events2.web.app/recipe',{
    header: {
      "Content-Type": "application/json",

    }
  })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(setRecipes)
      .catch(alert);
  }, []);

  const handleBuildClick = () => {
    const newRecipe = {
      id: recipes.length + 1, // Generate a unique ID
      name: recipeName,
      ingredients: convertToArray(ingredients),
    };

    setRecipes([...recipes, newRecipe]);
    setRecipeName('');
    setIngredients('');
  };

  function convertToArray(inputString) {
    let items = inputString.split("* ");
    let result = items.map(item => item.trim()).filter(item => item !== '');
    return result;
  }

  return (
    <div>
      <main>
        <h2>Recipe Builder</h2>
        {/* Input fields for recipe name and ingredients */}
        <input
          type="text"
          placeholder="Enter Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <textarea
          placeholder="Enter Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>

        {/* Display existing recipes and newly added recipe */}
        <section className="recipe-card">
          
        </section>

        {/* Build button to add the new recipe */}
        <button
          type="button"
          style={{ backgroundColor: 'green', width: '100px'}}
          onClick={handleBuildClick}
        >
          Build
        </button>
        <form>
            {recipes &&
    recipes.map((recipe) => (
    <article key={recipe.id}>
    <h2>{recipe.name}</h2>
    <p>
        {recipe.ingredients}
    </p>
    
      </article>
    ))}
        </form>
      </main>
    </div>
  );
}
