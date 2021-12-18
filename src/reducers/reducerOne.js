const OneState = {
	char: "",
}
export const reducerOne = (state = OneState, action) => {
	switch (action.type) {
		case "SET_CHAR":
			return { ...state, char: action.char }
		default:
			return state
	}
}
