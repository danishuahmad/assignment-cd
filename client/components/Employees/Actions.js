import axios from 'axios';

export const getEmployees = () => {
	
	//	send request now
	return axios.get('http://localhost:3000/api/employees').then(function (response) {	//	success
		console.log(response.data);
		return {success:true,employees: response.data};
		
		}).catch(function (error) {
			return {success:false};
		})
};