import uuid from "uuid"

function manageBand(state={bands: []}, action) {
	switch (action.type) {
		case "ADD_BAND":
			const band = {
				id: uuid(),
				name: action.name
			};
			return {bands: [...state.bands, band]};
		case "DELETE_BAND":
			return {bands: state.bands.filter(band => band.id !== action.id)}
		default:
			return state
	}
}

export default manageBand
