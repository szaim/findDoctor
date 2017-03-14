var React = require('react');



var CardModal = React.createClass({
	render: function() {
		return(
			<div className="modal fade" id={this.props.modalId} tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="ModalLabel">{`Dr.${this.props.doctorFullName}, ${this.props.doctorTitle}`}</h5>
			        <h6 className="card-subtitle mb-2 text-muted">{this.props.doctorSpecialty}</h6>
			      </div>
			      <div className="modal-body container-fluid">
			        <div className='row'>
			        	<div className='col-xs-3'>
			        		<p className='sg-title-gray'>Specialties</p>
			        	</div>
			        	<div className='col-xs-8'>
			        		<p>{this.props.specialtyDescription}</p>
			        	</div>
			        </div><hr/>
			        <div className='row'>
			        	<div className='col-xs-3'>
			        		<p className='sg-title-gray'>Personal Statement</p>
			        	</div>
			        	<div className='col-xs-8'>
			        		<p className='paragraph-elipsis'>{this.props.doctorBio}</p>
			        	</div>
			        </div><hr/>
			        <div className='row'>
			        	<div className='col-xs-3'>
			        		<p className='sg-title-gray'>Phone</p>
			        	</div>
			        	<div className='col-xs-8'>
			        		<p className='paragraph-elipsis'>{this.props.doctorPhone}</p>
			        	</div>
			        </div><hr/>
			        <div style={{height: '100px'}}>
			        <iframe
						allowFullScreen
		                className="left-column" 
		                title="GoogleMaps"
		                width="100%"
		                height="100%"
		                frameBorder="0"
		                scrolling="no"
		                marginHeight="0"
		                marginWidth="0"
		                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDUfii29d9wCw-d3rwqT1CtiCPQxjfLLUg&q=${this.props.lat},${this.props.long}`}>
	            	</iframe>
			        </div>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>

		)
	}
});

module.exports = CardModal;

