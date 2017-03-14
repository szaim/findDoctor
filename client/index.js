var React = require("react");
import { render } from 'react-dom';
require("./CSS/styles.css");
var routes = require ('./Components/routes');
// import Main from './components/app';


render(routes, document.getElementById('app'));