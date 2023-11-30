import { React, useContext } from "react"
import { UserContext } from "../App"



export default function Footer() {

	const userInfo = useContext(UserContext)



	return (
		<footer>
			<small>Copyright © 2023 | all rights reserved </small>
		</footer>
	)
}
