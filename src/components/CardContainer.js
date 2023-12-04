import React, { useState, useEffect } from "react";

export default function CardContainer({ token }) {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });

  useEffect(() => {
    // Fetch recipes when the component mounts
    fetch("https://backend-events2.web.app/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newRecipe = {
      title: formData.title,
      content: formData.content,
      // Other properties as needed for your recipe object
    };

    // Perform POST request to add a new recipe
    fetch("https://backend-events2.web.app/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update recipes with the new data
        setRecipes(data);
        // Reset form fields after submission
        setFormData({ title: "", content: "" });
      })
      .catch((err) => console.error(err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main>
    <h1>Recipes</h1>
    <form onSubmit={handleFormSubmit}>
    <input
    type="text"
    name="title"
    value={formData.title}
    placeholder="Title"
     onChange={handleInputChange}
    required
    />
     <textarea
     name="content"
    value={formData.content}
    placeholder="Content"
     onChange={handleInputChange}
    required
     ></textarea>
    <button type="submit">Add Recipe</button>
     </form>
    <section className="recipe-cards">
    {recipes &&
    recipes.map((recipe) => (
    <article key={recipe.id}>
    <h2>{recipe.name}</h2>
    <ul>
         {recipe.Ingredients.map((ingredient, index) => (
         <li key={index}>{ingredient}</li>
         ))}
     </ul>
     <p>{recipe.recipe}</p>
      </article>
    ))}
        </section>
        </main>
    );
    }
