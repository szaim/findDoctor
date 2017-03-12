var React = require('react');


var Header = React.createClass({
	render: function() {
		return (
			<div>
		     <div className="row">
	            <header className="header">
	                <div className="header-wrapper">
	                	<a  className="headerName" href="#">FindDoctor</a>
	                </div>
	            </header>
		     </div>	
		     {this.props.children}
		    </div>


		)
	}
});

module.exports = Header;