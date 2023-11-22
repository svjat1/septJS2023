// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let obj = [12, 13, 14, 'four', 'five', 'six', true, false, ['png'], [{skill: 'pro'}]]
console.log(obj[0]);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);
console.log(obj[4]);
console.log(obj[5]);
console.log(obj[6]);
console.log(obj[7]);
console.log(obj[8][0]);
console.log(obj[9][0]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: 'harry potter',
    pageCount: 350,
    genre: 'fairy tail'
    }
let book1 = {
    title: 'red hat',
    pageCount: 390,
    genre: 'fairy tail'
}
let book2 = {
    title: 'boo',
    pageCount: 550,
    genre: 'horror'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'harry potter',
    pageCount: 350,
    genre: 'fairy tail',
    authors: ['name', 'age']
}
let book5 = {
    title: 'red hat',
    pageCount: 390,
    genre: 'fairy tail',
    authors: ['name', 'age']
}
let book6 = {
    title: 'boo',
    pageCount: 550,
    genre: 'horror',
    authors: ['name', 'age']
}
console.log(book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name:'Kol', username:'Kol', password:'Kol223'},
    {name:'Paul', username:'Paul', password:'Paul223'},
    {name:'Nick', username:'Nick', password:'Nick223'},
    {name:'Nazar', username:'Nazar', password:'Nazar223'},
    {name:'Peter', username:'Peter', password:'Peter223'},
    {name:'Anton', username:'Anton', password:'Anton223'},
    {name:'Maria', username:'Maria', password:'Maria223'},
    {name:'Kristina', username:'Kristina', password:'Kristina223'},
    {name:'Susanna', username:'Susanna', password:'Susanna223'},
    {name:'Kristofer', username:'Kristofer', password:'Kristofer223'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 8
if(x != 0){
    console.log('вірно');
} else {
    console.log('невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time =15;
if(time >=0 && time <= 15){
    console.log('перша');
}else if(time >=16 && time <= 30){
    console.log('друга')
}else if(time >=31 && time <= 45){
    console.log('тертя')
}else if(time >=46 && time <= 60){
    console.log('четверта')
}else {
    console.log('Вийшли за межі часу 0_0')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15;
if(day >=0 && day <= 10){
    console.log('перша');
}else if(day >=11 && day <= 20){
    console.log('друга')
}else if(day >=21 && day <= 30){
    console.log('тертя')
} else {
    console.log('Вийшли за межі ')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let dayOfWeek = prompt('What day is today?')
// switch (dayOfWeek){
//     case '1':
//         console.log('Monday')
//         break;
//     case '2':
//         console.log('Tuesday')
//         break;
//     case '3':
//         console.log('Wednesday')
//         break;
//     case '4':
//         console.log('Thursday')
//         break;
//     case '5':
//         console.log('Friday')
//         break;
//     case '6':
//         console.log('Satuday')
//         break;
//     case '7':
//         console.log('Sunday')
//         break;
//     default:
//         console.log('wrong number')
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let number1 = prompt('Number1')
// let number2 = prompt('Number2')
// if(number1 > number2){
//     console.log('Перше число більше')
// }else if(number1 < number2){
//     console.log('Друге число більше')
// }else{
//     console.log('Числа рівні')
// }

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let any = prompt('Give me Any data');
// let x34 = any || 'default'
//     console.log(x34)


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
//     його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let d = coursesAndDurationArray
if(d[0].monthDuration > 5){
    console.log('Супер')
}else{
    console.log('не супер');
}
if(d[1].monthDuration > 5){
    console.log('Супер')
}else{
    console.log('не супер');
}
if(d[2].monthDuration > 5){
    console.log('Супер')
}else{
    console.log('не супер');
}
if(d[3].monthDuration > 5){
    console.log('Супер')
}else{
    console.log('не супер');
}
if(d[4].monthDuration > 5){
    console.log('Супер')
}else{
    console.log('не супер');
}
if(d[5].monthDuration > 5){
    console.log('Супер')
}else{
    console.log('не супер');
}