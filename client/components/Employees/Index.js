import React from 'react';
import {getEmployees} from './Actions';
import EmployeeItem from '../General/EmployeeItem';
import Progress from '../Modals/Progress';
import EmployeeDetail from '../Modals/EmployeeDetail';

class Employees extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			employee_details: {},
			employees: [],
			loading:false,
			show_details:false
		};
	}
	getEmployees = () => {
		let {employees,loading} = this.state;
		if( !loading ){	//	don't fetch if already loading
			this.setState({loading:true},() => {
				getEmployees().then( response => {
					if( response.success ){	// 200 status code -> GOOD
						employees = response.employees;
					}
					this.setState({employees,loading:false});
				})
			});
		}
	};
	componentDidMount() { //	fetch data on component load
		this.getEmployees();
	}
	seeDetail = (employee) => {	//	show employee detail popup
		this.setState({show_details:true,employee_details:employee})
	};
	closeEmployeeDetailModal = () => {	//	close employee detail popup
		this.setState({show_details:false})
	};
	render(){
		//	get vars to render
		let {employees,loading,show_details,employee_details} = this.state;
		return(
				<div className="container">
					<div className="column is-full">
						<h2 className="title is-1 is-spaced wq-note has-text-centered">
							Employees
						</h2>
					</div>
					{/** Employees **/}
					<div className="columns is-multiline" id="employee_container">
						{
							employees.map( (employee,index) =>
								<EmployeeItem
									key={employee.id}
									index={index}
									id={employee.id}
									first_name={employee.first_name}
									last_name={employee.last_name}
									seeDetails={()=>this.seeDetail(employee)}
								/>
							)
						}
					</div>
					{/** SHOW PROGRESS BAR WHILE FETCHING DATA **/}
					{loading ? <Progress loading={loading} /> : null}
					{
						show_details ?
							<EmployeeDetail
								closeModal={this.closeEmployeeDetailModal}
								{...employee_details}
							/> :
							null
					}
				</div>
			)
	}
}

export default Employees;