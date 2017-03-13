var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../redux/actions');
// https://maps.google.com/maps?q=california&amp;z=11&amp;output=embed

var MapLocation = React.createClass({
		render : function() {
			var location = this.props.location;
			console.log('location', location);
			var url = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDUfii29d9wCw-d3rwqT1CtiCPQxjfLLUg&q='+location;
			return (
				<iframe
					allowFullScreen
	                className="left-column" 
	                title="GoogleMaps"
	                width="100%"
	                height="900"
	                frameBorder="0"
	                scrolling="no"
	                marginHeight="0"
	                marginWidth="0"
	                src={url}>
	            </iframe>

			)
		}
});

var mapStateToProps = function(state, props) {
	return {
		location: state.location
	}
};

const Container = connect(mapStateToProps)(MapLocation);

module.exports = Container;




