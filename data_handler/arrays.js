//to export the arrays created from the excel sheets to algo.js 

const teacher_array = require('./teacher_array.js');
const courses_array = require('./courses_array.js');
const years_array = require('./years_array.js');

module.exports = {
	'teacher_array' : teacher_array,
	'courses_array' : courses_array,
	'years_array' : years_array
}