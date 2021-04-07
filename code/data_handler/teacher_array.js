const sheets = require('./access.js');
const moment = require('moment');

const teachers = sheets['Teachers'];
const courses = sheets['Courses'];
const slots = sheets['Slots'];

//array for storing the inforamtion of all teachers
var teacher_array = [];

for(var i=0; i<teachers.length; i++){
	//object for string information of a teacher
	const teacher={
		'initial' : null,
		'name' : null,
		'courses' : [],
		'slots' : {
			'Sunday' : [],
			'Monday' : [],
			'Tuesday' : [],
			'Wednesday' : [],
			'Thursday' : []
		},
		'available' : [true, true, true, true, true] //for the five slots per day

	}; 

	teacher.initial = teachers[i]['Teacher Initial'];
	teacher.name = teachers[i]['Full Name'];
	
	//all courses which a teacher is assigned to
	for(var j=0; j<courses.length; j++){
		if(courses[j]['Teacher Initial'] == teachers[i]['Teacher Initial']){
			var no_of_courses = Object.keys(courses[j]).length;
			for(var k=1; k<no_of_courses; k++){
				courseNo = 'Course' + k;
				teacher.courses.push(courses[j][courseNo]);
			}
		}
	}

	//all free slots of a teacher
	for(var j=0; j<slots.length; j++){
		if(slots[j].Teacher == teachers[i]['Teacher Initial']){
			var separate;
			var duration;
			var slotArray = [];
			if(slots[j].Sunday != undefined){
				separate = slots[j].Sunday.split(';');
			}
			else{
				separate = [];
			}
			for(var p=0; p<separate.length; p++){
				duration = separate[p].split('-');
				duration[0] = moment(duration[0], 'HH:mmA');
				duration[1] = moment(duration[1], 'HH:mmA');
				slotArray.push([duration[0], duration[1]]);
			}
			teacher.slots.Sunday = slotArray;
			slotArray = [];
			if(slots[j].Monday != undefined){
				separate = slots[j].Monday.split(';');
			}
			else{
				separate = [];
			}
			for(var p=0; p<separate.length; p++){
				duration = separate[p].split('-');
				duration[0] = moment(duration[0], 'HH:mmA');
				duration[1] = moment(duration[1], 'HH:mmA');
				slotArray.push([duration[0], duration[1]]);
			}
			teacher.slots.Monday = slotArray;
			slotArray = [];
			if(slots[j].Tuesday != undefined){
				separate = slots[j].Tuesday.split(';');
			}
			else{
				separate = [];
			}
			for(var p=0; p<separate.length; p++){
				duration = separate[p].split('-');
				duration[0] = moment(duration[0], 'HH:mmA');
				duration[1] = moment(duration[1], 'HH:mmA');
				slotArray.push([duration[0], duration[1]]);
			}
			teacher.slots.Tuesday = slotArray;
			slotArray = [];
			if(slots[j].Wednesday != undefined){
				separate = slots[j].Wednesday.split(';');
			}
			else{
				separate = [];
			}
			for(var p=0; p<separate.length; p++){
				duration = separate[p].split('-');
				duration[0] = moment(duration[0], 'HH:mmA');
				duration[1] = moment(duration[1], 'HH:mmA');
				slotArray.push([duration[0], duration[1]]);
			}
			teacher.slots.Wednesday = slotArray;
			slotArray = [];
			if(slots[j].Thursday != undefined){
				separate = slots[j].Thursday.split(';');
			}
			else{
				separate = [];
			}
			for(var p=0; p<separate.length; p++){
				duration = separate[p].split('-');
				duration[0] = moment(duration[0], 'HH:mmA');
				duration[1] = moment(duration[1], 'HH:mmA');
				slotArray.push([duration[0], duration[1]]);
			}
			teacher.slots.Thursday = slotArray;
			slotArray = [];
		}
	}

	teacher_array.push(teacher);

}

module.exports = teacher_array;

//console.log(teacher_array);