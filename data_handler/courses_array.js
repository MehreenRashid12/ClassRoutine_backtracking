const sheets = require('./access.js');

const courses = sheets['Courses'];

//array for all the courses
var courses_array = [];

for(var i=0; i<courses.length; i++){
	var no_of_courses = Object.keys(courses[i]).length;
	for(var j=1; j<no_of_courses; j++){
		//object for each course
		const course = {
			'code' : null,
			'type' : 'theory',
			'year' : null,
			'credits' : 3,
			'classTime' : 1.5,
			'classPerWeek' : 2,
			'teachers' : [],    //assosiated teachers
			'available' : true
		}
		var courseNo = 'Course' + j;
		course.code = courses[i][courseNo];
		course.teachers.push(courses[i]['Teacher Initial']);
		var separate = courses[i][courseNo].split(' ');
		course.year = separate[1][0];
		if(separate[1][2] == '1'){
			course.type = 'lab';
			course.credits = 1.5;
			course.classTime = 3;
			course.classPerWeek = 1;
		}
		courses_array.push(course);
	}
}

//in case there are two teachers for a lab course
//remove the duplicate courese
//and assign the two teachers in the same teacher array
for(var i=0; i<courses_array.length; i++){
	for(var j=i+1; j<courses_array.length; j++){
		if(courses_array[i].code == courses_array[j].code){
			courses_array[i].teachers.push(courses_array[j].teachers[0]);
			courses_array.splice(j,1);
		}
	}
}

module.exports = courses_array;

// console.log(courses_array.length)
// console.log(courses_array);