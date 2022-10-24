`use strict`;

let isHuman = true;
const age = 31;

// if condition
// if(isHuman && age === 31) {
// 	console.log('You are human and your age is 31')
// } else if (!isHuman && age !== 31) {
// 	console.log('Are you an alien?');
// } else {
// 	console.log('Who are you?')
// }

// тернарний оператор
// const result = isHuman === true && age === 31 ? 'You are human and your age is 31' : !'Who are you?';
// console.log(result);

// switch
// const userName = 'Nata';
// switch(userName) {
// 	case 'Natalka':
// 	case 'Natalyja':
// 	case 'Nata':
// 	case 'Nataly':
// 		welcomeMessage = 'Hello Nataly';
// 		break;
// 	case 'Tetiana':
// 		welcomeMessage = 'Hello Tetiana';
// 		break;
// 	case 'Альона':
// 		welcomeMessage = 'Hello Альона';
// 		break;
// 	default:
// 		welcomeMessage = 'Hello Stranger';
// 		break;
// }
// console.log(welcomeMessage);

// let userName = 'Petro';
// let anotherUserName = userName; // 'Petro'
// anotherUserName = 'Vasyl';
// console.log(userName); // 'Petro'
// console.log(anotherUserName); // 'Vasyl'


// var не має блочної області видимості
if (isHuman) {
  var test = 'test value';
}

console.log(test);