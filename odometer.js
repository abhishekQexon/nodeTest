/*
* Faulty odometer problen. Doesn't read '4'
*
* Language - JavaScript
*
* Logic- Since 4 is never read, we should be using base 9 but instead of 0,1,2,3,4,5,6,7,8 it is 0,1,2,3,5,6,7,8,9
* Replace all digits greater than 4 with the digit-1 digit.
* Re-create the number in base 9
*
*
* Ex-> realOdoReading(1999) => Output: Reeal odo reading: 1457
*/

var realOdoReading = function(shownValue){
	let length=0, formattedValue=0, temp, realReading =0, i;
	//formate the value shown in odo by decreasing all digits gretaer than 4 by 1
	for(i=shownValue; i>0; i=parseInt(i/10)) {
		temp = i%10;
		temp = temp > 4 ? (temp-1) : temp;
		formattedValue = formattedValue + (temp*findPow(10, length));
		length++;
	}

	//Recreate the number in base 9
	for(i=0;i<length && formattedValue>0;i++) {
		temp = formattedValue%10;
		realReading = realReading + (temp*findPow(9, i))
		formattedValue=parseInt(formattedValue/10);
	}

	console.log("Real odo reading: ", realReading);
	return realReading;
}

var findPow = function(num, times) {
	temp=1;
	for(i=0;i<times;i++)
		temp = temp*num;
	return temp;
}

realOdoReading(1999);