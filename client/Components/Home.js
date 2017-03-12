var React = require('react');
var Search = require('./containers/Search');



var Home = React.createClass({

	render: function() {
		return (
			<div>
				<Search />
			</div>

		)
	}
});

module.exports = Home;