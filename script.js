`use strict`;

// Основи роботи з функціями

// function sayHello(name = 'Woman') {
// 	let bonus = 'mrs';
// 	console.log(bonus);
// 	console.log(`Hello ${bonus} ${name}, you get ${100+2} dollars`);
// }


// function squared(number) {
// 	return number * number;
// };

// let result = squared(2);

// console.log(result);

// let counter = 0;

// function sayGreeting(age) {
// 	if (isNaN(+age)) {
// 		return 'Чи можете ввести число?';
// 	} else if (age < 18) {
// 		return 'Привіт!';
// 	} else if (35 > age) {
// 		return 'Вітаю!';
// 	} else {
// 		return 'Доброго дня';
// 	}
// };

// const say = sayGreeting(25);

// const arr = [1, 2, 3];

// const updatedArr = arr.map(num => squared(num));

// let squared = function(number) {
// 	return number * number;
// };

// console.log(updatedArr);

// let age = prompt('Скільки вам років?', 10);

// let welcome;

// if (age < 18) {
// 	welcome = function() {
// 		console.log('Привіт!');
// 	}
// } else if (35 > age) {
// 	welcome = function() {
// 		console.log('Доброго дня!');
// 	}
// }

// welcome();

// let functionSometheing = (a, b) => {
// 	let c = a*b*b;
// 	return c;
// }; 

// console.log(sum(4,5));


function recSumTo(number) {
	if(number === 1) {
		return 1;
	}
	return number + recSumTo(number-1);
}

console.log(recSumTo(10));