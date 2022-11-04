`use strict`;

// 5. Об'єкти в деталях

let id = Symbol("unique person id");
// let anotherId = Symbol("unique person id");

// console.log(anotherId === id);

const person = {
	name: 'Anton',
	age: 56,
	mainRole: 'admin',
	isOnline: false,
	roles: ["user", "support", "admin"],
	sayHi: () => {console.log("Hello there!")},
	params: {
		height: 175,
		weight: 85,
	},
	[id]: 666,
	'some secret': true,
};

// const key = {key: 'isOnline'};

// key = 'isOffline';
// const initObject = {name: 'Oleg'};
// const secondObject = new Object({name: 'Anna'})

// delete person.mainRole;
// // console.log(initObject)
// // console.log(secondObject)

// console.log(person);

// let isThereSomeHeight = 'height' in person.params;

// console.log(isThereSomeHeight);


// for (key in person) {
// 	console.log(typeof key);
// };


// person?.params?.weight = 45;

// console.log(person.params);

// console.log(Object.keys(person));


// console.log(Object.entries(person));

// let capsPerson = Object.fromEntries(
//   Object.entries(person).map(([key, value]) => [key.toUpperCase(), value])
// );

// console.log(capsPerson);

// capsPerson.SAYHI()

// console.log(person[id]);

// console.log(typeof null);

// if (
// 	typeof person === 'object' && 
// 	person !== null &&
// 	!Array.isArray(person)
// ) {
// 	console.log('its object');
// }

// let anotherPerson =JSON.parse(JSON.stringify(person));

// anotherPerson.name = 'Oleg';

// anotherPerson.params.height = 180;

// console.log(person);
// console.log(anotherPerson);

// Object.freeze(person);

// person.name = 'Nataly';

// console.log(person);

// let someDate = new Date().setDate(25);

// console.log(someDate);

// let start = performance.now();

// for (let i = 0; i < 100000000; i++) {
// 	++person[id]
// }

// let end = performance.now();

// console.log(person[id]);
// console.log('time: ', end - start);


console.log(Date.parse('03 Aug 1985'));