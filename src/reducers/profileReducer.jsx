import {
	FETCH_PROFILE_SUCCESS,
	EDIT_PROFILE,
	SAVE_IMAGE
} from "../actions/types";
const initialState = {
	user: {},
	item: {},
	image: ""
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_PROFILE_SUCCESS:
			return {
				...state,
				user: action.payload
			};
    case EDIT_PROFILE:
      alert("success", {}, null, null, "/profile")
			return {
				...state,
				item: action.payload
			};
		case SAVE_IMAGE:
			return {
				...state,
				image: action.payload
			};
		default:
			return state;
	}
}
