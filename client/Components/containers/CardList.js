var React = require('react');
var Card = require('../Card');
var CardModal = require('./CardModal');
var connect = require('react-redux').connect;
var actions = require('../../redux/actions');



var CardList = React.createClass({

	render: function() {

		var cardList = this.props.cards.map((card,index) => {
			var doctorImage,
			fullName,
			title,
			specialty,
			ratings,
			specialtyDes,
			doctorBio,
			phone,
			latitude,
			longitude;
			card.doctors.filter((element) => {
				console.log('element');
				if(!((element.profile.image_url).includes('thumbnail'))) {
					doctorImage = 'http://png.clipart.me/graphics/thumbs/154/medical-symbol-vector_154363523.jpg';
				}else {
					doctorImage = element.profile.image_url;
				}
				if(!element.ratings.length) {
					ratings = 'https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-4.5.png';
				}else {
					ratings = element.ratings[0].image_url_small;
				}
				if(element.profile.bio == '') {
					doctorBio = 'N/A'
				}else {
					doctorBio = element.profile.bio;
				}
				if(!card.phones.length) {
					phone = 'N/A';
				}else {
					phone = card.phones[0].number;
				}
				fullName = element.profile.first_name + ' ' + element.profile.last_name;
				title = element.profile.title;
				specialty = element.specialties[0].actor;
				specialtyDes = element.specialties[0].description;
				latitude = card.lat;
				longitude = card.lon;
				return element.length >= 1;

			});

				return (
					<Card
					key={index}
					src={doctorImage}
					doctorName={fullName}
					title={title}
					specialty={specialty}
					ratings={ratings}
					specialtyDes={specialtyDes}
					bio={doctorBio}
					phone={phone}
					latitude={latitude}
					longitude={longitude}
					id={index} />

				)

		});
		return (
			<div className='row col-lg-9 cardList-wrapper'>
				{cardList}
			</div>

		)

	}
});

var mapStateToProps = function(state, props) {
	return {
		cards: state.list
	}
};

const Container = connect(mapStateToProps)(CardList);

module.exports = Container;