const sheets = require('./access.js');

const courses = sheets['Courses'];

//array for all years/batches
var years_array = [];

for(var i=0; i<courses.length; i++){
	var no_of_courses = Object.keys(courses[i]).length;
	for(var j=1; j<no_of_courses; j++){
		//object for each year
		const year = {
			'year_no' : null,
			'available' : [true, true, true, true, true] //for five slots
		}
		var courseNo = 'Course' + j;
		var separate = courses[i][courseNo].split(' ');
		year.year_no = separate[1][0];
		var duplicate = false;
		for(var k=0; k<years_array.length; k++){
			if(years_array[k].year_no == year.year_no){
				duplicate = true;
				break;
			}
		}
		if(duplicate == false){
			years_array.push(year);
		}
	}
}


//console.log(years_array);

module.exports = years_array;