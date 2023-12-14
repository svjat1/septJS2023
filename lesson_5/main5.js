// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let calcSofCube = (a, b) =>  a * b;
//
// console.log(calcSofCube(11, 5));
//
// // // - створити функцію яка обчислює та повертає площу кола з радіусом r
// let calcSofColo = (r) => 2 * r * Math.PI;
//
// console.log(calcSofColo(10));
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let calcSofCylinder = (h, r)=>2 * r * h * Math.PI;
//
// console.log(calcSofCylinder(1, 5));
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
// const obj = (arr) =>{
//     for (const argument of arr) {
//         console.log(argument);
//     }
// }
//
// obj([2, 22, ['test'], {key: "value"}]);
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const paragraphWrite = (text)=> {
//     document.write(`<p> ${text} </p>`)
// }
//
// paragraphWrite('Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const createUl = (text) =>{
//     document.write(`<div>
//                          <ul>
//                          <li>${text}</li>
//                          <li>${text}</li>
//                          <li>${text}</li>
//                          </ul>
//                     </div>`)
//                          }
// createUl('lorem lorem lorem two')
// createUl('Перевірочка перевірочка')
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createUlLi = (text, number) =>{
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createUlLi('Тестуємо власні логічні потуги', 3)


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const createObj = (arr)=> {
//     for (const argument of arr) {
//         document.write(`
//                          <ul>
//                          <li>${argument}</li>
//                          </ul>
//                          `)
//     }
// }
// createObj([33, 44, 'test','test2', false]);
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // // Для кожного об'єкту окремий блок.
// const createObjectWithKey = (arr)=>{
//     for (const arrElement of arr) {
//             document.write(`<div> ID : ${arrElement.id} **** Name: ${arrElement.name} **** Age: ${arrElement.age}</div>`)
//         }
//     }
// createObjectWithKey([
//     {id:44, name:'OLEH', age :14},
//     {id:14, name:'Mamai', age :33},
//     {id:11, name:'Korifey', age :25}
// ]);
// // - створити функцію яка повертає найменьше число з масиву
// const smallestNumber =(arr)=>{
//     let min = arr[0]
//     for (const arrElement of arr) {
//         if(arrElement < min)
//              min = arrElement
//     }
//     return min;
// }
//
// console.log(smallestNumber([2, 11, 22, 82, 113, -6, 1]));
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// // Приклад sum([1,2,10]) //->13
// const sumNumber =(arr)=>{
//     let result = 0
//     for(const argument of arr) {
//         result += argument
//     }
//     return result
// }
//
// let resw = sumNumber([2, 11, 22, 82, 113, 6, 1])
// console.log(resw);
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями занчення у відповідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// const swap=(arr, index1, index2)=> {
//     if (index1 < 0 || index1 > arr.length || index2 < 0 || index2 > arr.length) {
//         console.log('Error dude')
//     } else {
//         const firstCondition = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = firstCondition
//     }
//     return arr;
// }
//
// let objectNumber = [12, 1, 33, 2, 14, 441, 555, 3, 111];
// let k = swap(objectNumber, 1, 3)
// console.log(k);
// //
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// const exchange = (sumUAH, currencyValues, exchangeCurrency)=> {
//     for (const part of currencyValues) {
//         if (part.currency === exchangeCurrency) {
//             return {ammount: sumUAH / part.value, currency: exchangeCurrency};
//         }
//     }
// }
//
// let calcOfCurrency = exchange(2000, [{currency: 'USD', value: 40},
//     {currency: 'EUR', value: 50},
//     {currency: 'PLN', value: 9},
//     {currency: 'KRN', value: 1.2}
// ], 'EUR');
// document.write(`<ul><li>It's your money : ${calcOfCurrency.ammount} - ${calcOfCurrency.currency}</li></ul>`)
// console.log(calcOfCurrency);