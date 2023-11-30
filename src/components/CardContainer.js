import { Button } from 'bootstrap'
import { useEffect, useState } from 'react'


export default function CardContainer() {
	const { getRecipe, setRecipe } = useState()
	useEffect(() => {

		fetch('http://localhost:8080')

			.then(res => res.json())
			.then(data => getRecipe(data))
			.catch(err => console.log(err))


	}, [getRecipe])

	const handleFormSubmit = evt => {

		evt.preventDefault()
		const formData = {};
		formData.title = evt.target.title.value
		formData.content = evt.target.content.value


		fetch('http://localhost:8080', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then(res => res.json())
			.then(cleanData => setRecipe(cleanData))
			.catch(err => console.error(err))

	}
	 
		
	  
	  
	return (

		<>
			<form action='' onClick={evt = handleFormSubmit(evt)}>
				<label htmlFor=''>
					<input type="text" name='title' id='' />
				</label>
				<label htmlFor=''>
					<input type="text" name='content' id='' />
				</label>
				

			<Button type='submit'>Add Recipe</Button>

			</form>

			<div className='cardContainer'>
				{getRecipe.map((singleRecipe, index) => {

					return (

						<div classname = 'singleCard' key={singleRecipe._id}>
							
							<h2>title:{singleRecipe.title}</h2>
							<p>{singleRecipe.content}</p>
					
						</div>
					)
				} )}

			</div>
		</>

	)

}