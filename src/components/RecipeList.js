import React, { useState, useEffect } from "react";


export default function RecipeList({ token }) {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');

  useEffect(() => {
    fetch('https://backend-events2.web.app/recipe', {
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
      id: recipeName,
      Ingredients: ingredients
    };
    setRecipeName('');
    setIngredients('');

    fetch('https://backend-events2.web.app/recipe', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(setRecipes)
      .catch(console.error);

  };


  return (
    <div >
      <main>
        <h2>Recipe Builder</h2>
        <br/>
        {/* Input fields for recipe name and ingredients */}
        <input
          type="text"
          placeholder="Enter Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          
              
      
        
        />
         <br/>
        <br/>
        <br/>
        <textarea
          placeholder="Enter Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          style={{}}
        ></textarea>
           
        {/* Display existing recipes and newly added recipe */}
        <section className="recipe-card">

        <br/>
        <br/>
        </section>
        {/* Build button to add the new recipe */}
        <button
          type="button"
          style={{ backgroundColor: 'green', width: '100px' }}
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
