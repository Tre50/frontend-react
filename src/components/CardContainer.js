// import { useState, useEffect } from "react"


// export default function CardContainer({ token }) {

//   const [recipes, setRecipes] = useState()

//   useEffect(() => {
//     fetch('https://localhost:8080')
//       .then(res => res.json())
//       .then(setRecipes)
//       .catch(alert)
//   }, [])

//   const handleFormSubmit = evt => {
// 	evt.preventDefault()
// 	const formData = {}
// 	formData.title = evt.target.title.value 
// 	formData.content = evt.target.content.value 

// 	fetch ('http://localhost:8080', {
// 			method: 'POST',
// 			headers: {
// 					'Content-Type': 'application/json',

// 			},
// 			'Content-Type': 'application/json',


// 	})
// 			.then(res => res.json())
// 			.then(cleanData => setRecipes(cleanData))
// 			.catch (err => console.error(err))


//   }

//   return (
//     <main>
//       <h1>Recipes</h1>
//       <CardContainer token={token} setRecipes={setRecipes} />
//       <section className="recipe-cards">
//         {recipes && recipes.map(recipe => (
//           <article key={recipe.id}>
//             <h2>{recipe.name}</h2>
//             <ul>
//               {recipe.ingredients.map(ingredient => (
//                 <li key={ingredient}>{ingredient}</li>
//               ))}
//             </ul>
//             <p>{recipe}</p>
//           </article>
//         ))}
//       </section>
//     </main>
//   )
// }