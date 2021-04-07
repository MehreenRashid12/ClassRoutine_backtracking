// var ar = [];

// const t1 = {
// 	'Initial' : 'AI',
// 	'Name' : 'Ashraful Islam',
// 	'Courses' : [0, 1, 5],
// 	'slots' : {'sun':'no', 'mon':'yes'}
// }

// ar.push(t1);

// const t2 = {
// 	'Initial' : 'MMR',
// 	'Name' : 'Rana',
// 	'Courses' : [2, 3, 6],
// 	'slots' : {'sun':'no', 'mon':'yes'}
// }

// ar.push(t2);


// t1.Time = 'Morning';
// t2.Time = 'Evening';

// console.log(Object.keys(t1).length);

// console.log(ar);

// console.log(ar[0].slots.sun);

const moment = require('moment');

var str = '11.30am';
var str2 = '11:30pm';
var d = moment(str, 'HH:mmA');
var d2 = d.clone();
d2 = d2.add(4.5,'hours');
var duration = moment.duration(d2.diff(d));
var h = duration.asHours();
console.log(h);
// if(d<d2){
// 	console.log('d2 is bigger.');
// }

// else{
// 	console.log('d is bigger.');
// }
// console.log(d);
// console.log(d2);

// const path = require('path');

// //base file name

// console.log(path.basename(__filename));

// //base dir name

// console.log(path.dirname(__filename));

// var ar = [3,5,6,3,4];

// ar.splice(2,1);

// console.log(ar);
// let arr = [
//     { name:"string 1", value:"this", other: "that" },
//     { name:"string 2", value:"this", other: "that" }
// ];

// let obj = arr.find(o => o.name === 'string 1');

// console.log(obj);

// function isIt(i){
// 	return i*i;
// }

// console.log(isIt(3));

// for(var i=0; i<5; i++){
// 	var clone_slot = day_slots[i].clone();
// 	slot_start = day_slots[i];
// 	tslot_end = clone_slot;
// 	tslot_end.add(1.5,'hours');
// 	var clone_slot = day_slots[i].clone();
// 	lslot_end = clone_slot;
// 	lslot_end.add(3,'hours');
// 	// console.log(slot_start,tslot_end);
// 	// console.log(slot_start,lslot_end);
// 	for(var j=0; j<courses_array.length; j++){
// 		if(courses_array[j].available == true && courses_array[j].type == 'theory'){
// 			//console.log(courses_array[j].code);
// 			var year = years_array.find(o => o.year_no == courses_array[j].year);
// 			//console.log(year);
// 			if(year.available == true){
// 				courses_array[j].available = false;
// 				var teacher = teacher_array.find(o => o.initial == courses_array[j].teachers[0]);
// 				if(teacher.available == true){
// 					var sunday = teacher.slots.Sunday;
// 					for(var k=0; k<sunday.length; k++){
// 						if(sunday[k][0]<=slot_start && sunday[k][1]>=tslot_end){
// 							routine.Sunday.push([moment(slot_start).format('HH:mma'),courses_array[j].code]);
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// // console.log(routine);

// 	if(courses_array[j].type == 'lab'){
// 		if(assignLabTeacher(j)){
// 				routine.Sunday.push([moment(slot_start).format('HH:mma'),courses_array[j].code]);
// 				year.available[i] = false;
// 				courses_array[j].available[i] = false;
// 				courses_array[j].classPerWeek -= 1;		
// 		}
// 	}

// 	function assignLabTeacher(i,j){
// 	var teacher = teacher_array.find(o => o.initial == courses_array[j].teachers);
// 	if(teachers.length == 1){
// 		var teacher1 = teacher[0];
// 		if(teacher1.available[i] == false){
// 			 return false;
// 		}
// 		var sunday = teacher1.slots.Sunday;
// 		for(var k=0; k<sunday.length; k++){
// 			if(sunday[k][0]<=slot_start && sunday[k][1]>=tslot_end){
// 				teacher1.available[i] == false;
// 				return true;
// 			}
// 		}
// 	}
// 	else{
// 		var teacher1 = teacher[0];
// 		var teacher2 = teacher[1];
// 		if(teacher1.available[i] == false || teacher2.available[i] == false){
// 			return false;
// 		}
// 		var sunday1 = teacher1.slots.Sunday;
// 		var sunday2 = teacher2.slots.Sunday;
// 		var teacher1_free = false;
// 		var teacher2_free = false;
// 		for(var k=0; k<sunday1.length; k++){
// 			if(sunday1[k][0]<=slot_start && sunday1[k][1]>=tslot_end){
// 				teacher1_free = true;
// 				break;
// 			}
// 		}
// 		for(var k=0; k<sunday2.length; k++){
// 			if(sunday2[k][0]<=slot_start && sunday2[k][1]>=tslot_end){
// 				teacher2_free = true;
// 				break;
// 			}
// 		}
// 		if(teacher1_free && teacher2_free){
// 			teacher1.available[i] == false;
// 			teacher2.available[i] == false;
// 			return true;
// 		}

// 	}

// 	return false;
// }