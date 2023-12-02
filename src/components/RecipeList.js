import React, { useState, useEffect } from "react"

//import RecipeList from "./RecipeList"

export default function RecipeList({ token }) {

  const [recipes, setRecipes] = useState()

  useEffect(() => {
    fetch('https://backend-events2.web.app/recipe/')
      .then(res => res.json())
      .then(setRecipes)
      .catch(alert)
  }, [])
  const handleBuildClick = () => {
    // Add functionality for the 'Build' button here
    // For example, you could navigate to another page or perform an action
    // when the 'Build' button is clicked
    console.log("Build button clicked");
  };



  return (
    <main>
      <h2>Recipe Builder</h2>
      <section className="recipe-cards">
        {recipes && recipes.map(recipe => (
          <article key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{recipe.recipe}</p>
          </article>
        ))}
      </section>
      <button type="button" style={{ backgroundColor: 'skyblue' }} onClick={handleBuildClick}>
        Build
      </button>
    </main>
  );
}
