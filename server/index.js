const csv = require('csv-parser');
const fs = require('fs');

module.exports = () => {
	
	let employees = [];
	fs.createReadStream('server/users.csv')
		.pipe(csv())
		.on('data', (row) => {
			employees.push(row);
		})
		.on('end', () => {
			console.log('CSV file successfully processed');
		});
	
    return { employees };
}
