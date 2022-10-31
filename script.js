`use strict`;

// 4. Масиви в деталях

// const users = ["Igor", "Olga", "Petro", "Anna", "Nataly"];

// console.log(Array.isArray('true'));

//CRUD operations

// const users = ["Igor", "Olga", "Petro", "Anna", "Nataly"];

// delete users[2];

// 


// length

// const users = ["Igor", "Olga", "Petro", "Anna"];

// console.log(users[users.length-1]);

// console.log(users.at(-1));

// 

// const users = ["Igor", "Olga", "Petro", "Anna"];

// users.shift();

// console.log(users);


// const users = ["Igor", "Olga", "Petro", "Anna"];

// for(let index = 0; index < users.length; index++) {
// 	console.log(users[index]);
// }

// for (let user of users) {
// 	console.log(user);
// }


// users.forEach(
// 	(user, index) => {
// 		console.log(user + '!')
// 		console.log('my number is - ', parseInt(index, 10)+1)
// 	}
// )

// const users = ["Igor", "Olga", "Petro", "Anna"];

// users.splice(-1, 1);

// console.log('users --> ', users);
// console.log('deletedUsers --> ', deletedUsers);


// const users = ["Igor", "Olga", "Petro", "Anna"];

// const specialusers = users.slice();
// specialusers[4] = 'Ivan'
// console.log('users --> ', users);
// console.log('specialusers --> ', specialusers);

// const users = ["Igor", "Olga", "Petro", "Anna"];

// // const specialusers = ;

// const superusers = users.concat(["Ivan", "Vova", "Inna", "Nina"], "John");
// console.log('users --> ', users);
// console.log('superusers --> ', superusers);

// const users = ["Igor", "Olga", "Petro", "Anna"];

// const updatedUsers = users.map(
// 	(userName) => userName.toUpperCase()
// );

// console.log('users --> ', users);
// console.log('updatedUsers --> ', updatedUsers);

// users.forEach(
// 	(userName) => userName.toUpperCase()
// );
// console.log('users --> ', users);

// const users = [10, -5 , 16, 24];

// users.sort((a, b) => {
// 	if (a > b) {
// 		return 1;
// 	} else if ( a === b) {
// 		return 0;
// 	} else if( a < b) {
// 		return -1;
// 	}
// });

// console.log('users --> ', users);


// const users = ["Igor", "Olga", "Petro", "Anna", "Olga"];

// const copiedUsers = users.slice();
// const reversedUsers = copiedUsers.reverse();

// console.log('users --> ', users);
// console.log('reversedUsers --> ', reversedUsers);

// let userData = ["Koval", "Ivan", "Petrovych"];

// console.log(userData.join(' ').split("", 12));

// const hasNameIvan = userData.includes("Ivan".toUpperCase());

// console.log('hasNameIvan --> ', hasNameIvan);

// const indexOfNameOlga = users.lastIndexOf("Olga");

//  console.log('indexOfNameOlga --> ', indexOfNameOlga);

// const numberValues = [10, -5 , 16, 24, 100, -12, 7];

// const foundNumber = numberValues.find(number => number > 100);
// const filteredNumbers = numberValues.filter(number => number > 100);

// console.log('foundNumber --> ', foundNumber);
// console.log('filteredNumbers --> ', filteredNumbers);

// const matrix = [
// 	[24, 45, 56],
// 	[12, 56, [90]],
// 	[89, 41, 73]
// ]

// const flatMatrix = matrix.flat(Infinity);
// console.log('flatMatrix --> ', flatMatrix);


// const users = ["Olga", "Oleg", "Olga"];

// const startsWithP = users.some((userName) => userName[0] === 'F');
// console.log('startsWithP --> ', startsWithP);

// const allStartWithO = users.every((userName) => userName[0] === 'O');
// console.log('allStartWithO --> ', allStartWithO);

// const numberValues = [10, -5 , 16, 24, 100, -12, 7];

// const initValue = 0;

// const sumOfValues = numberValues.reduce(
// 	(prev, current) => prev + current,
// 	initValue
// )

// console.log('sumOfValues --> ', sumOfValues);


// const users = ["Olga", "Oleg", "Olga"];

// let user1 = users[0];
// let user2 = users[1];

// let [user1, user2, user3] = users;
//