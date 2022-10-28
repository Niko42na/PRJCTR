`use strict`;

// 3. Примітивні типи даних в деталях

// let resultByNumber = Number('    12');
// let resultByParseInt = parseFloat('28.10whatawonderfuldayFriday', 10);
// let resultByPlus = +'12px';

// console.log('resultByNumber --> ', resultByNumber);
// console.log('resultByParseInt --> ', resultByParseInt);
// // console.log('resultByPlus --> ', resultByPlus);

// let value = null;

// // let resultByToString = value.toString();
// let resultByString = String(value);
// let resultByEmptyString = value+'';

// // console.log('resultByToString --> ', resultByToString);
// // console.log('resultByString --> ', resultByString);
// // console.log('resultByEmptyString --> ', resultByEmptyString);

// console.log(12+ 12); //24
// console.log('12' + 12);
// console.log('12' + '12');


// let resultByBoolean = Boolean('');
// let resultByTwo = !!'';

// console.log('resultByBoolean --> ', resultByBoolean);
// console.log('resultByTwo --> ', resultByTwo);

// let resultByBigInt = BigInt(false);

// console.log('resultByBigInt --> ', resultByBigInt);


// console.log('result --> ', 60 + 5 + '12');

// let result = false || 'username' || true;
// console.log('result --> ', result);

// let name = 'Mykhailo';
// let userName = name || 'unknown user';
// console.log('userName --> ', userName);

// let result = 0 && true && '';
// console.log('result --> ', result);

// let showUserName = true;
// let userName = 'Oleg';
// let userNameForRendering = showUserName && userName;
// console.log('userNameForRendering --> ', userNameForRendering);


// let showUserName = false;
// let userName = 'Oleg';
// let userNameForRendering = showUserName && userName || 'Unknown user';
// console.log('userNameForRendering --> ', userNameForRendering);

// let counter = 0;

// for (let i = 0; i < 10; i++) {
// 	++counter; // counter = counter + 1;
// 	console.log('i --> ', i);
// 	console.log('counter --> ', counter);
// 	console.log('-------------');
// }

// let numberOne = 0xFF === 0xff
// let numberTwo = 0b10101


// let number = 13..toString(2);
// console.log('number --> ', number);

// let parsedNumber = parseFloat('400.52.1131234px', 10);
// console.log('parsedNumber --> ', parsedNumber);

// let someRandomResult = Math.random(); // 0...1
// console.log('someRandomResult --> ', someRandomResult);

// let someResult = Math.trunc(13.99);
// console.log('someResult --> ', someResult);

// let bill = 12.457841484.toFixed(3);
// console.log('bill --> ', bill);

// let unexpectedResult = 1.1 + 2.2;
// console.log('unexpectedResult --> ', +unexpectedResult.toFixed(2));

// let text = 'Hello Darkness My Old Friend';
// console.log(text);

// let text = 'Пам\'ятай про книгу \'Кобзар\' і про те такий символ як \';
// console.log(text);

// let text = 'Пам'ятай про книгу 'Кобзар'';
// console.log(text.length);

// let text = 'female';
// console.log(text.charAt(10));

// console.log("\u{1F61C}");

// let text = 'Пам\'ятай про книгу \'Кобзар\'';
// console.log(text.toLowerCase());


// let text = 'Пам\'ятай про книгу \'Кобзар\' книгу';
// let query = 'ПАМ\'ЯТАЙ';
// console.log(text.startsWith(query)); 

// let text = 'Пам\'ятай про книгу \'Кобзар\'';
// let substring = text.slice(2, 10);
// console.log(substring);

let text = 'Пам\'ятай про книгу \'Кобзар\' книгу';
let query = '    Пам\'ятай  ';
console.log(text.includes(query.trim())); 
