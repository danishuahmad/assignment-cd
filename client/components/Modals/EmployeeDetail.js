import React from 'react';

class EmployeeDetail extends React.Component{
	render(){
		let {id,first_name,last_name,email,phone,gender,closeModal} = this.props;
		return(
			<div className="modal is-active">
				<div className="modal-background"/>
				
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">{first_name} {last_name}</p>
						<p className="subtitle is-6">ID: {id}</p>
					</header>
					<section className="modal-card-body">
						<p>{email}</p>
						<p>{phone}</p>
						<p>{gender}</p>
					</section>
				</div>
				
				<button onClick={closeModal} className="modal-close is-large" aria-label="close"/>
			</div>
		)
	}
}

export default EmployeeDetail;