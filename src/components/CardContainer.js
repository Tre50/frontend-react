import React, { useState, useEffect } from "react";
//import "./styles.css";
export default function CardContainer({ token }) {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [imageUrl, setImageUrl] = useState("")

  const findRecipe = (evt) => {
    evt.preventDefault();
    console.log('running findRecipe')
    const query = { query: formData.title };
    fetch("https://api-iodlq5cdhq-uc.a.run.app/findRecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("FIND RECIPE ->", data);
        setRecipes(data);
      })
      .catch((err) => console.log);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newRecipe = {
      name: formData.title,
      Ingredients: formData.content,
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
        setRecipes(data); // Ensure the response includes the updated list of recipes
        setFormData({ title: "", content: "" }); // Reset form fields after submission
      })
      .catch((err) => console.error(err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageClick = (recipe) => {
    setSelectedRecipe(recipe);
    if (recipe.imageUrl) {
      setImageUrl(recipe.imageUrl);
    } else {
      setImageUrl("");
    }
  };

  return (
    <main>
      <h1>Recipes</h1>
      <form onSubmit={findRecipe}>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Title"
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display Canva image from URL */}
      <section className="image-container">
       
          {imageUrl && <img src={"gs://backend-events2-default-rtdb-backups/OVEN BAKED SNAPPER.png"} alt="Recipe Image" /> }
          
      </section>

      {/* Display selected recipe details */}
      <section className="recipe-details">
        {selectedRecipe && (
          <div>
            <h2>{selectedRecipe.id}</h2>
            <p>{selectedRecipe.Ingredients}</p>
            {/* Add other recipe properties as needed */}
          </div>
        )}
      </section>

      {/* Display recipes */}
      <section className="recipe-cards">
        {recipes &&
          recipes.map((recipe, index) => (
            <article key={index} onClick={() => handleImageClick(recipe)}>
              <h2>{recipe.id}</h2>
              <p>{recipe.Ingredients}</p>
              {/* Add other recipe properties as needed */}
            </article>
          ))}
      </section>
    </main>
  );
}
