var actions = require("./actions");


var initialState = {
	list: []
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

	return state;
};


module.exports = reducer;