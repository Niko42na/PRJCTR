'use strict';

// Основи роботи з DOM (1)

// function sayHi() {
//   console.log("Здоров");
// }

// window.sayHi();

// document.body.style.backgroundColor = "red";
// setTimeout(() => document.body.style.background = 'lightblue', 3000);

// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild


// console.log(Array.from(document.body.childNodes).sort());

// console.log(document.body.nextSibling)

// console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.previousElementSibling);
// console.log(document.head.nextElementSibling);


// пошук в ДОМ дереві

// let element = document.getElementById('headerTwo');
// headerTwo.style.color = "yellow";

// let hTwoElements = document.body.getElementsByTagName('h2');
// console.log(hTwoElements);

// let spanElements = document.body.getElementsByTagName('span');
// console.log(spanElements);

// let textClassElements = document.body.getElementsByClassName('text');
// console.log(textClassElements);

// let element1 = document.querySelector('ul');
// let element2 = document.querySelector('span');
// console.log(element1.contains(element2));

// let searchedSection = document.getElementsByName('firstSection');

// console.log(searchedSection);

// let newElement = document.createElement('div');
// newElement.className = 'newElement';
// newElement.innerHTML = '<b>Здоров!</b>';

// document.querySelector('.firstSection').insertAdjacentElement('beforebegin', '<b>Здоров!</b>');
// document.querySelector('.firstSection').insertAdjacentElement('afterbegin', '<b>Як справи?</b>');
// document.querySelector('.firstSection').insertAdjacentElement('beforeend', '<b>Як життя?</b>');
// document.querySelector('.firstSection').insertAdjacentElement('afterend', '<b>Бувай!</b>');

// let clone = document.querySelector('.firstSection').cloneNode(false);


// headerTwo.remove();

// document.body.style.cssText = `color: blue`;

// console.log(document.body.style.cssText);

// console.log(getComputedStyle(document.body));