import { combineReducers } from 'redux'
import { GET_DATA_REQUEST, GET_LOADING_DATA_REQUEST } from '../actions/searchActions'

export const SearchData = {
	text: '',
	page: 1,
	limit: 10,
	data: '',
	is_loading: true
}

export function	dataReducer(state = SearchData, action) {
	switch(action.type) {
		case GET_DATA_REQUEST:
			return {
				...state,
				text: action.payload.text,
				is_loading: false,
				data: action.payload.data,
				page: action.payload.page
			}
		case GET_LOADING_DATA_REQUEST:
			return {...state, is_loading: true, text: action.payload.text, data: {}}
		default:
			return state
	}
}


export const rootReducer = combineReducers({
	data: dataReducer
})
