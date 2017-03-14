var React = require('react');
var Search = require('./containers/Search');
var CardList = require('./containers/CardList');
var MapLocation = require('./containers/Map');
var Footer = require('./Footer');

var Home = React.createClass({

	render: function() {
		return (
			<div className='row'>
				<div className='col-xs-12 search-wrapper'>
					<Search />
				</div>
				<div className='col-xs-12 row body-wrapper'>
					<CardList />
					<div className="col-lg-3 map-wrapper">
						<MapLocation />
					</div>
				</div>
				<div className='col-xs-12 footer-wrapper'>
					<Footer />
				</div>
			</div>

		)
	}
});

module.exports = Home;