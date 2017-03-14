var React = require('react');
var CardModal = require('./containers/CardModal');


var Card = function(props) {
	return (
		<div>
		<div className="card col-xs-5">
		  <div className="card-img-top" style={{backgroundImage: 'url('+props.src+')'}} />
		  <div className="card-block">
		  	<h4 className="card-title">{`Dr.${props.doctorName}, ${props.title}`}</h4>
		  	<h6 className="card-subtitle mb-2 text-muted">{props.specialty}</h6>
		  	<img src={props.ratings} alt="stars image cap" /><br />
		    <button className="btn btn-primary doctor-info-button" data-toggle="modal" data-target={`#${props.id}`}>More info</button>
		  </div>
		</div>
			<CardModal
			modalId={props.id} 
			doctorFullName={props.doctorName}
			doctorTitle={props.title}
			doctorSpecialty={props.specialty}
			specialtyDescription={props.specialtyDes}
			doctorBio={props.bio}
			doctorPhone={props.phone}
			lat={props.latitude}
			long={props.longitude}/>
		</div>

	)
};


module.exports = Card;

	    
		   
