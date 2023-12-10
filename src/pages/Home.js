import CardContainer from "../components/CardContainer"

import RecipeList from "../components/RecipeList";
import SignupForm from "../components/SignupForm";
//import SignupForm from "../components/SignupForm";



export default function Home() {
	return (
		<>
			<SignupForm/>
			<CardContainer />
			<RecipeList/>
		</>
	)
}