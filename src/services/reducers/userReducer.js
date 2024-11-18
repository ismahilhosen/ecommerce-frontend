import {
	GET_USERS_FALL,
	GET_USERS_REQUEST,
	GET_USERS_SUCCESS,
} from "../constans/usersConstan";

const userInitialState = {
	isLoading: false,
	users: [],
	error: null,
};

export const getUsersReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case GET_USERS_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case GET_USERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				users: action.payload,
				error: null,
			};
		case GET_USERS_FALL:
			return {
				...state,
				isLoading: false,
				users: [],
				error: action.payload,
			};
		default:
			return state;
	}
};
