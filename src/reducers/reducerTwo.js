const TwoState = {
	no: 0,
}
export const reducerTwo = (state = TwoState, action) => {
	switch (action.type) {
		case "SET_NO":
			return { ...state, no: action.no }
		default:
			return state
	}
}
