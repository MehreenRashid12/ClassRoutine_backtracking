const arrays = require('./data_handler/arrays.js');
const moment = require('moment');

//geeting teacher, course and year arrays
const teacher_array = arrays['teacher_array'];
const courses_array = arrays['courses_array'];
const years_array = arrays['years_array']

// console.log(teacher_array);
// console.log(courses_array);
// console.log(years_array);

//the five slot per day
const day_slots = ['8:30am','10:00am', '11:30am', '2:00pm', '3:30pm'];

const slot_availablity = [true,true,true,true,true];

var slot_start; //a slot's start time
var tslot_end;  //a slot's end time if it is a theory course (1.5 hrs)
var lslot_end;  //a slot's end time if it is a lab course (3 hrs)

//converting to moment objects
for(var i=0; i<5; i++){
	day_slots[i] =  moment(day_slots[i], 'HH:mmA');
}

//object for a valid class routine
const routine = {
	'Sunday' : [],
	'Monday' : [],
	'Tuesday' : [],
	'Wednesday' : [],
	'Thurs' : []
};

//find the start and end of a slot
function getStartEnd(i){
	var clone_slot = day_slots[i].clone();
	slot_start = day_slots[i];
	tslot_end = clone_slot;
	tslot_end.add(1.5,'hours');
	var clone_slot = day_slots[i].clone();
	lslot_end = clone_slot;
	lslot_end.add(3,'hours');

}

//assigning teacher for theory course
//one teaher takes one theory course
function assignTheoryTeacher(day,i,j){
	var teacher = teacher_array.find(o => o.initial == courses_array[j].teachers[0]);
	if(teacher.available[i] == false){
		return false;
	}
	var weekday = teacher.slots[day];
	for(var k=0; k<weekday.length; k++){
		if(weekday[k][0]<=slot_start && weekday[k][1]>=tslot_end){
			teacher.available[i] = false;
			return true;
		}
	}
	return false;
}

//assigning teacher for lab course
//at most two teachers can take a lab course
function assignLabTeacher(day,i,j){
	var teacher1;
	var teacher2;
	//if there is one teacher for the lab course
	if(courses_array[j].teachers.length == 1){
		teacher1 = teacher_array.find(o => o.initial == courses_array[j].teachers[0]);
		if(teacher1.available[i] == false){
			 return false;
		}
		var weekday = teacher1.slots[day];
		for(var k=0; k<weekday.length; k++){
			if(weekday[k][0]<=slot_start && weekday[k][1]>=lslot_end){
				teacher1.available[i] = false;
				teacher1.available[i+1] = false;
				return true;
			}
		}
	}
	//if there are two teachers for the lab course
	else{
		teacher1 = teacher_array.find(o => o.initial == courses_array[j].teachers[0]);
		teacher2 = teacher_array.find(o => o.initial == courses_array[j].teachers[1]);
		if(teacher1.available[i] == false || teacher2.available[i] == false){
			return false;
		}
		var weekday1 = teacher1.slots[day];
		var weekday2 = teacher2.slots[day];
		var teacher1_free = false;
		var teacher2_free = false;
		for(var k=0; k<weekday1.length; k++){
			if(weekday1[k][0]<=slot_start && weekday1[k][1]>=lslot_end){
				teacher1_free = true;
				break;
			}
		}
		for(var k=0; k<weekday2.length; k++){
			if(weekday2[k][0]<=slot_start && weekday2[k][1]>=lslot_end){
				teacher2_free = true;
				break;
			}
		}
		if(teacher1_free && teacher2_free){
			teacher1.available[i] = false;
			teacher2.available[i] = false;
			teacher1.available[i+1] = false;
			teacher2.available[i+1] = false;
			return true;
		}

	}

	return false;
}

//assigning a course in a slot
function assignCourse(day,i,j){

	var year = years_array.find(o => o.year_no == courses_array[j].year);

	if(courses_array[j].classPerWeek > 0 && courses_array[j].available == true && year.available[i] == true){
		if(courses_array[j].type == 'theory'){
			if(assignTheoryTeacher(day,i,j)){
					routine[day].push([moment(slot_start).format('HH:mma'),courses_array[j].code,courses_array[j].teachers[0]]);
					year.available[i] = false;
					courses_array[j].available = false;
					courses_array[j].classPerWeek -= 1;

			}
		}
		if(courses_array[j].type == 'lab' && i!=2 && i!=4){
			if(assignLabTeacher(day,i,j)){
					if(courses_array[j].teachers.length == 1){
						routine[day].push([moment(slot_start).format('HH:mma'),courses_array[j].code,courses_array[j].teachers[0]]);
					}
					else if(courses_array[j].teachers.length == 2){
						routine[day].push([moment(slot_start).format('HH:mma'),courses_array[j].code,courses_array[j].teachers[0],courses_array[j].teachers[1]]);
					}
					year.available[i] = false;
					year.available[i+1] = false;
					courses_array[j].available = false;
					courses_array[j].classPerWeek -= 1;		
			}
		}
	}
		
}

//assinging courses in slot in a day
function assignSlot(day){
	for(var i=0; i<5; i++){
		getStartEnd(i);
		for(var j=0; j<courses_array.length; j++){
			assignCourse(day,i,j);

		}
	}
}

function resetDay(){
	for(var i=0; i<courses_array.length; i++){
		courses_array[i].available = true;
	}
	for(var i=0; i<teacher_array.length; i++){
		for(j=0; j<5; j++){
			teacher_array[i].available[j] = true;
		}
	}
	for(var i=0; i<years_array.length; i++){
		for(j=0; j<5; j++){
			years_array[i].available[j] = true;
		}
	}

}
//assigning courses in the slots for five weekdays
assignSlot('Sunday');
resetDay();
assignSlot('Monday');
resetDay();
assignSlot('Tuesday');
resetDay();
assignSlot('Wednesday');
resetDay();
assignSlot('Thursday');
resetDay();


//console.log(routine);

module.exports = routine;

