`use strict`;

let counter = 20;

// while (counter < -1) {
// 	console.log('counter is ', counter);
// 	counter++;
// }


//do...while

// do{
// 	console.log('counter is ', counter);
// 	counter++;
// } while (counter < -1);


//for...

for(let innerCounter = 0; innerCounter < 100; innerCounter++) {
	if (innerCounter % 2) continue;
	console.log('innerCounter --> ', innerCounter);
}