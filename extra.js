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

// const moment = require('moment');

// var str = '11.30am';
// var str2 = '11:30pm';
// var d = moment(str, 'HH:mmA');
// var d2 = moment(str2,'HH:mmA');
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

var ar = [3,5,6,3,4];

ar.splice(2,1);

console.log(ar);