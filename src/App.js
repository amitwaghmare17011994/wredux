import "./styles.css"

import { useSelector } from "./wstore"

import store from "./store"

export default function App() {
	return (
		<div className="App">
			<ComponentOne />

			<br />
			<br />
			<br />
			<br />
			<ComponentTwo />
		</div>
	)
}

const ComponentOne = () => {
	const no = useSelector((state) => {
		return state.reducerTwo.no
	})

	return (
		<button
			onClick={() => {
				store.dispatch({ type: "SET_NO", no: no + 3 })
			}}
		>
			Add 3
		</button>
	)
}

const ComponentTwo = () => {
	const char = useSelector((state) => state.reducerOne.char)
	console.log({ char })

	return (
		<button
			onClick={() => {
				store.dispatch({ type: "SET_CHAR", char: char + "T" })
			}}
		>
			Add T
		</button>
	)
}
