`use strict`;

// Продвинута робота з функціями

// Про контекст виконання на приклад рекурсії та ітерації

// ітеративна сума

// function iterativeSum(x) {
// 	// console.log('iterativeSum x - ', x);
//   	let result = 0;
// 	for (let i = 0; i <= x; i++) {
// 		result += i;
// 	}
// 	return result;
// }
// console.log(iterativeSum(5));

// рекурсивна сума

// function recursiveSum(x) {
// 	console.log('recursiveSum x --> ', x);
// 	if (x === 1) {
// 		return x;
// 	}
// 	return x+recursiveSum(x-1);
// }
// console.log(recursiveSum(5));

// залишкові параметри та оператор розширення

	// function simpleSum(a, b, ...args) {
	//   console.log('arguments - ', arguments);
	//   let sum = a + b;
	//   for (let arg of args) {
	//   	sum += arg;
	//   }
	//   return sum;
	// }
	// console.log(simpleSum(1,2,3,4,12,23));

	// let arr1 = [1, -2, 3, 4];
	// let arr2 = [8, 3, -8, 12];
	// console.log( Math.max(1, ...arr1, 2, ...arr2) ); 

	// let number = `456`;
	// console.log([...number] );

// замикання

	// let price1 = 1;

	// function simpleSum(a, b) {
	// 	let innerPrice = 2;
	//   	return a + b + innerPrice;
	// }
	// price1 = 3;
	// let innerPrice = 20;
	// console.log(simpleSum(price1));


	// function makeWorker() {
	//   let name = "Петро";
	//   return function() {
	//     console.log(name);
	//   };
	// }
	// let name = "Іван";
	// // create a function
	// let work = makeWorker();
	// // call it
	// work();

// створення декількох каунтерів

	// function makeCounter() {
	// 	let count = 0;

	// 	return function() {
	// 		return ++count;
	// 	};
	// }

	// let counter = makeCounter();

	// console.log( counter() );  // 1
	// console.log( counter() );  // 2
	// console.log( counter() );  // 3

	// let counter2 = makeCounter();

	// console.log( counter2() );  
	// console.log( counter2() );  
	// console.log( counter2() ); 

//IIFE
	// (function() {
	// 	console.log('Hi')
	// })();

// глобальний об'єкт

	// globalThis.nextTargets = {
	// 	city: 'Moskow'
	// }

	// console.log(globalThis.nextTargets.city);

// об'єкт функції

	// function recursiveSum(x, y, ...z) {
	// 	console.log('recursiveSum x --> ', x);
	// 	if (x === 1) {
	// 		return x;
	// 	}
	// 	return x+recursiveSum(x-1);
	// }

	// console.log(recursiveSum.length);


	// function sayHi() {
	// 	// console.log('callingCounter', callingCounter);
	// 	sayHi.callingCounter++;
	// }

	// sayHi.callingCounter = 0;

	// sayHi();
	// sayHi();
	// sayHi();

	// console.log('sayHi.callingCounter -- ', sayHi.callingCounter);