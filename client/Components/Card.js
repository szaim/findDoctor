const React = require('react');



const Card = function(props) {
	return (
		<div className="card" style={{width: '20rem';}}>
		  <img className="card-img-top" src={props.image} alt="Card image cap" />
		  <div className="card-block">
		    <h4 className="card-title">{`Dr.${props.doctorName}, ${props.title}`}</h4>
		    <h6 className="card-subtitle mb-2 text-muted">{props.speciality}</h6>
		    <img src={props.ratings} alt="stars image cap" />
		    <p className="card-text">{`${props.street}, ${props.city}, ${props.state}, ${props.zip}`}</p>
		    <a href="#" className="btn btn-primary">Go somewhere</a>
		  </div>
		</div>

	)
};


module.exports = Card;