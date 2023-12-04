import React, { useState, useEffect } from "react"



export default function RecipeList({ token }) {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('https://backend-events2.web.app/recipe')
      .then(res => res.json())
      .then(setRecipes)
      .catch(alert)
  }, [])
  const handleBuildClick = () => {
    // add functionality for the Build button here
    // you could navigate to another page or perform an action
    // when the Build button is clicked
    console.log("Build button clicked");
  };

  function convertToArray(inputString) {
    // Split the string by the delimiter "* "
    let items = inputString.split("* ");
    
    // Remove leading/trailing whitespaces and filter out empty strings
    let result = items.map(item => item.trim()).filter(item => item !== '');
    
    return result;
}

  return (

    <div >
    <main >
      <h2>Recipe Builder</h2>
      <section className="recipe-card">
        {recipes && recipes.map(recipe => (
          <article key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.Ingredients && convertToArray(recipe.Ingredients).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <button type="button" style={{ backgroundColor: 'green', width: '100px'}} onClick={handleBuildClick}>
        Build
      </button>
    </main>
    </div>
  );
}
