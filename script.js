'use strict';

// setTimeout(function greet() {
//   console.log('Good day, user!');
// }, 5000);

// console.log("I'm being called before greet function.");


// - чому код в 7 рядку виконався раніше за 4
// - куди поділось виконання коду з рядка 4
// - як воно розуміє що треба виводити код з 4 рядка


// стек викликів

// function outer() {
//     function inner() {
//         // 3
//         console.log('Hello!')
//     };

//     // 2
//     inner();
// }

// // 1
// outer();

// приклад асинхронного коду і його стеку

// function main() {
//   setTimeout(function greet() {
//     console.log('Hello!')
//   }, 2000)

//   console.log('Bye!');
// }

// main();

// цикл подій

        // СТЕК                                        WEB API                                 Черга задач     

// пекло колбеків

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       setTimeout(() => {
//         console.log('Hello!')
//       }, 5000)
//     }, 5000)
//   }, 5000)
// }, 5000)


        // function request(url, onSuccess) {
        //   /*...*/
        // }

        // request('/api/users/1', function (user) {
        //   request(`/api/photos/${user.id}/`, function (photo) {
        //     request(`/api/crop/${photo.id}/`, function (response) {
        //       console.log(response)
        //     })
        //   })
        // })

//fetch

// const textEditorState = {
//   lastModified: "2023-01-09T12:15:00",
//   blocks: [
//     {
//       type: "heading",
//       data: {
//         text: "Плани на 2023"
//       }
//     },
//     {
//       type: "paragraph",
//       data: {
//         text: "Перемога"
//       }
//     }
//   ]
// }

// const response = await fetch('/api/save-text', {
//    method: 'POST',
//    body: JSON.stringify(textEditorState),
// })


// REST

            // Наприклад, метод та адреса для створення користувача
            // могли б виглядати так:
            // POST /api/users

            // Для отримання конкретного користувача:
            // GET /api/users/1
            // (Де 1 - це ID користувача.)

            // Для редагування даних про користувача:
            // PATCH /api/users/1

            // Для видалення даних:
            // DELETE /api/users/1