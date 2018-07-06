import { SAVE_COMMENT } from 'actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case SAVE_COMMENT: 
		//take action payload and add it to a state array
		// ...state: take all existing comment to this array
		// action.payload: add new comment just got passed in into reducer.
			return [...state, action.payload];
		default:
		return state;
	}
}