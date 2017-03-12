var React = require('react');
var ReactRouter = require('react-router');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
var Provider = require("react-redux").Provider;
var store = require("../redux/store");
var Header = require('./Header');
var Home = require('./Home');
var Search = require('./containers/Search');


var routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Header}>
				<IndexRoute component={Home} />

			</Route>
		</Router>
	</Provider>


);

module.exports = routes;

