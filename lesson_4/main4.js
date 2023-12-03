// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calcSofCube(a, b) {
//     return a * b
// }
//
// let result_calcSofCube = calcSofCube(10, 5);
// console.log(result_calcSofCube);
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function calcSofColo(r) {
//     return 2 * r * Math.PI;
// }
//
// let result_calcSofColo = calcSofColo(10);
// console.log(result_calcSofColo);
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function calcSofCylinder(h, r) {
//     return 2 * r * h * Math.PI;
// }
//
// let result_calcSofCylinder = calcSofCylinder(1, 5);
// console.log(result_calcSofCylinder);
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
// function obj(arr) {
//     for (const argument of arr) {
//         console.log(argument);
//     }
//     return arr;
// }
//
// obj([2, 22, ['test'], {key: "value"}]);
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraphWrite(text) {
//     document.write(`<p> ${text} </p>`)
// }
//
// paragraphWrite('Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUl(text) {
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
// function createUlLi(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createUlLi('Тестуємо власні логічні потуги', 3)
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function createObj(arr) {
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
// function createObjectWithKey(arr){
//     for (const arrElement of arr) {
//             document.write(`<div> ID : ${arrElement.id} Name: ${arrElement.name} Age: ${arrElement.age}</div>`)
//         }
//     }
// createObjectWithKey([
//     {id:44, name:'OLEH', age :14},
//     {id:14, name:'Mamai', age :33},
//     {id:11, name:'Korifey', age :25}
// ]);
// // - створити функцію яка повертає найменьше число з масиву
// function smallestNumber (arr){
//     let min = arr[0]
//     for (const arrElement of arr) {
//         if(arrElement < min)
//              min = arrElement
//     }
//     return min;
// }
//
// console.log(smallestNumber([2, 11, 22, 82, 113, 6, 1]));
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// // Приклад sum([1,2,10]) //->13
// function sumNumber (arr){
//     let result = 0
//     for(const argument of arr) {
//         result += argument
//     }
//     return result
// }
//
// let resw = sumNumber([2, 11, 22, 82, 113, 6, 1])
// console.log(resw);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями занчення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    if (index1 < 0 || index1 > arr.length || index2 < 0 || index2 > arr.length) {
        console.log('Error dude')
    } else {
        const firstCondition = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = firstCondition
    }
    return arr;
}

let objectNumber = [12, 33, 2, 14, 441, 555, 3, 111];
let k = swap(objectNumber, 1, 3)
console.log(k);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const part of currencyValues) {
        if (part.currency === exchangeCurrency) {
            return sumUAH / part.value
        }
    }
}

let calcOfCurrency = exchange(1000, [{currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'PLN', value: 9},
    {currency: 'KRN', value: 1.2}
], 'EUR');
document.write(`<ul><li>It's your money : ${calcOfCurrency}</li></ul>`)
console.log(calcOfCurrency);