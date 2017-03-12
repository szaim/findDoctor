var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../redux/actions');

var Search = React.createClass({

searchDoctor: function(event){
	event.preventDefault();
	var name = this.refs.keyName.value;
	var location = this.refs.location.value;
	console.log('this hit');
	console.log(name);
	this.props.dispatch(actions.fetchData(name, location));
},


	render: function() {
		return (
			<div>
				<form  onSubmit={this.searchDoctor}>
						<input  type='text' ref='location' placeholder='Destination, city' required />
						<input  type='text' ref='keyName' placeholder='Search category' required />
						<button className='btn btn-primary btn-lg search-button' type='submit'>Search</button>
				
				</form>
			</div>
			)
	}
});



var Container = connect()(Search);

module.exports = Container;