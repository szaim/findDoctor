var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../redux/actions');

var Search = React.createClass({
	componentWillMount: function(){
		this.props.dispatch(actions.fetchData('dentist', 'rockville'));

	},
	searchDoctor: function(event){
		event.preventDefault();
		var name = this.refs.keyName.value;
		var location = this.refs.location.value;
		console.log('this hit');
		console.log(name);
		console.log(location);
		this.props.dispatch(actions.fetchLocationSuccess(location));
		this.props.dispatch(actions.fetchData(name, location));
	},


	render: function() {
		return (
			<div className='container search-container'>
				<h1 className='title'>Ouch? Find a doctor.</h1>
				<form className='form form-inline' onSubmit={this.searchDoctor}>
						<input id='keyWord-search' className='form-control' type='text' ref='keyName' placeholder='What brought you here today?' required />
						<input  id='location' className='form-control' type='text' ref='location' placeholder='City/State or Zip' required />
						<button className='btn btn-primary btn-lg search-button' type='submit'>Search</button>
				
				</form>
			</div>
			)
	}
});



var Container = connect()(Search);

module.exports = Container;