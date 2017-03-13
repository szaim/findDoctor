var actions = require("./actions");


var initialState = {
	list: [],
	location:'United State'
};


var reducer = function(state, action) {
	state = state || initialState;
	if(action.type === actions.FETCH_DATA_SUCCESS) {
		console.log('fetchData success');
		state = Object.assign({}, state, {
			list: action.data.body.data
		});
		console.log('list', state);
		return state;
	}
	else if(action.type === actions.FETCH_DATA_ERROR) {
		return {
			error: action.error
		}
	}
	else if(action.type === actions.FETCH_LOCATION_SUCCESS) {
		console.log('reducer location', action.location);
		state = Object.assign({}, state, {
			location: action.location
		});
		console.log('reducer location state', state);

		return state;
	}

	return state;
};


module.exports = reducer;