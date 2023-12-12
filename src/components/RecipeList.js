import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundfood from '../backgroundfood.jpg';

export default function RecipeList({ token }) {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState(''); 
  const navigate = useNavigate(); // Initialize navigate from useNavigate

  useEffect(() => {
    // Fetch recipes from the API on component mount
    fetch('https://backend-events2.web.app/recipe', {
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok.');
        }
        return res.json();
      })
      .then(data => {
        // Update state with fetched data
        setRecipes(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        // Perform additional error handling or display a user-friendly message
      });
  }, []);

  const handleBuildClick = () => {
    const newRecipe = {
      id: recipeName,
      Ingredients: ingredients,
      Instructions: instructions
    };
    setRecipeName('');
    setIngredients('');
    setInstructions('');

    // POST request to add a new recipe
    fetch('https://backend-events2.web.app/recipe', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok.');
        }
        return res.json();
      })
      .then(data => {
        console.log(data); // Log the response data if needed
        // Perform any necessary actions after successful POST request

        // Navigate to the desired route after adding the recipe
        navigate('/recipe'); // Replace '/recipe-list' with your desired URL
      })
      .catch(error => {
        console.error('POST request error:', error);
        // Perform additional error handling or display a user-friendly message
      });
  };

  return (
    <div>
      <main>
        <h2>Recipe Builder</h2>
        <br />
        <br />
        <img src= {backgroundfood} 
        alt="Food Background" 
        style={{ width:'50%'}}
        
        />
         <br />
         <br />
        {/* Input fields for recipe name and ingredients */}
        <input
          type="text"
          placeholder="Enter Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <br />
        <br />
        <br />
        
        <textarea
          placeholder="Enter Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        <br />
        <br />
        <br />
        <textarea
        placeholder="Enter Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      ></textarea>
           <br />
        {/* Display existing recipes and newly added recipe */}
        <section className="recipe-card">
          {/* Existing recipes */}
        </section>

        {/* Build button to add the new recipe */}
        <button
          type="button"
          style={{ backgroundColor: 'green', width: '200px' }}
          onClick={handleBuildClick}
        >
          Build
        </button>

        {/* <form>
          {recipes &&
            recipes.map((recipe) => (
              <article key={recipe.id}>
                <h2>{recipe.id}</h2>
                <p>{recipe.Ingredients}</p>
              </article>
            ))}
        </form> */}
      </main>
    </div>
  );
}
