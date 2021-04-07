//to access the excel file

const xlsx = require('xlsx');
const path = require('path');

const book = xlsx.readFile(path.join(__dirname,'sheets','input.xlsx'));

//console.log(book.SheetNames);

const teachers = book.Sheets['Teachers'];
const courses = book.Sheets['Courses'];
const slots = book.Sheets['Slots'];

const teacher_json = xlsx.utils.sheet_to_json(teachers);
const courses_json = xlsx.utils.sheet_to_json(courses);
const slots_json = xlsx.utils.sheet_to_json(slots);

// console.log(teacher_json);
// console.log(courses_json);
// console.log(slots_json);

module.exports = {
	'Teachers' : teacher_json,
	'Courses' : courses_json,
	'Slots' : slots_json
};

