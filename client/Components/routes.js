var React = require('react');
var ReactRouter = require('react-router');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
var Provider = require("react-redux").Provider;
var store = require("../redux/store");
var Home = require('./Home');


var routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Home}>

			</Route>
		</Router>
	</Provider>


);

module.exports = routes;