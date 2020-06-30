import React from 'react';
import {timeAgo} from '../../utility';

class EmployeeItem extends React.Component{
	render(){
		const {index,id,first_name,last_name,seeDetails} = this.props;
		return(
			<div key={id} tabIndex={index} className="column is-one-third ">
				<div onClick={seeDetails} className="card cursor_pointer">
					<div className="card-content">
						<div className="media">
							<div className="media-left">
								<figure className="image is-48x48">
									<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
								</figure>
							</div>
							<div className="media-content">
								<p className="title is-4">{first_name} {last_name}</p>
								<p className="subtitle is-6">@{id}</p>
							</div>
						</div>
						
						<div className="content">
							<h6 className="has-text-centered">See More</h6>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EmployeeItem;