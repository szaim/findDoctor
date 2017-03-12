var React = require('react');
var Search = require('./containers/Search');



var Home = React.createClass({

	render: function() {
		return (
			<div className='row'>
				<div className='col-xs-12 search-wrapper'>
					<Search />
				</div>
			</div>

		)
	}
});

module.exports = Home;