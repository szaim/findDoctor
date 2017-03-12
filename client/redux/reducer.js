var actions = require("./actions");


var initialState = {
	list: []
};


var reducer = function(state, action) {
	state = state || initialState;
	console.log('state.list', state.list);

	if(action.type === actions.FETCH_DATA_SUCCESS) {
		console.log('fetchData success');
		var state = Object.assign({}, state, {
			list: action.data.body.response.groups[0].items
		});
		console.log('characterdata', characterData);
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