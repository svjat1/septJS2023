// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні
// з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// let form = document.forms[0]
// form.onsubmit = function (e){
//     e.preventDefault()
//     let div = document.createElement('div');
//     div.innerHTML = (`Name : ${this.username.value}  ----  Surname : ${this.usersurname.value} ---- Age : ${this.userage.value}`);
//     document.body.append(div)
// }

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let number = localStorage.getItem('saved') || 0;
// let div = document.getElementById('div1');
// div.innerHTML = number;
// currentNum = parseInt(number)
// currentNum += 1;
// localStorage.setItem('saved', currentNum);
//
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// const dateN = new Date();
// let sessions = JSON.parse(localStorage.getItem('session')) || [];
// sessions.push({
//     date : dateN.toString()
// })
// localStorage.setItem('session',JSON.stringify(sessions) )
// console.log(sessions);
//
// let obj = localStorage.getItem('sessions');
// let json = obj ? JSON.parse(obj) : [];
//
// json.push({
//     date: new Date(),
// })
// localStorage.setItem('sessions', JSON.stringify(json));
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// let hundred = [
//     {name: "name1", age: 25},
//     {name: "name2", age: 30},
//     {name: "name3", age: 22},
//     {name: "name4", age: 28},
//     {name: "name5", age: 35},
//     {name: "name6", age: 19},
//     {name: "name7", age: 42},
//     {name: "name8", age: 27},
//     {name: "name9", age: 31},
//     {name: "name10", age: 24},
//     {name: "name11", age: 38},
//     {name: "name12", age: 29},
//     {name: "name13", age: 33},
//     {name: "name14", age: 40},
//     {name: "name15", age: 21},
//     {name: "name16", age: 36},
//     {name: "name17", age: 26},
//     {name: "name18", age: 23},
//     {name: "name19", age: 32},
//     {name: "name20", age: 45},
//     {name: "name21", age: 18},
//     {name: "name22", age: 37},
//     {name: "name23", age: 28},
//     {name: "name24", age: 30},
//     {name: "name25", age: 31},
//     {name: "name26", age: 29},
//     {name: "name27", age: 33},
//     {name: "name28", age: 40},
//     {name: "name29", age: 21},
//     {name: "name30", age: 36},
//     {name: "name31", age: 26},
//     {name: "name32", age: 23},
//     {name: "name33", age: 32},
//     {name: "name34", age: 45},
//     {name: "name35", age: 18},
//     {name: "name36", age: 37},
//     {name: "name37", age: 28},
//     {name: "name38", age: 30},
//     {name: "name39", age: 25},
//     {name: "name40", age: 30},
//     {name: "name41", age: 22},
//     {name: "name42", age: 28},
//     {name: "name43", age: 35},
//     {name: "name44", age: 19},
//     {name: "name45", age: 42},
//     {name: "name46", age: 27},
//     {name: "name47", age: 31},
//     {name: "name48", age: 24},
//     {name: "name49", age: 38},
//     {name: "name50", age: 29},
//     {name: "name51", age: 33},
//     {name: "name52", age: 40},
//     {name: "name53", age: 21},
//     {name: "name54", age: 36},
//     {name: "name55", age: 26},
//     {name: "name56", age: 23},
//     {name: "name57", age: 32},
//     {name: "name58", age: 45},
//     {name: "name59", age: 18},
//     {name: "name60", age: 37},
//     {name: "name61", age: 28},
//     {name: "name62", age: 30},
//     {name: "name63", age: 25},
//     {name: "name64", age: 30},
//     {name: "name65", age: 22},
//     {name: "name66", age: 28},
//     {name: "name67", age: 35},
//     {name: "name68", age: 19},
//     {name: "name69", age: 42},
//     {name: "name70", age: 27},
//     {name: "name71", age: 31},
//     {name: "name72", age: 24},
//     {name: "name73", age: 38},
//     {name: "name74", age: 29},
//     {name: "name75", age: 33},
//     {name: "name76", age: 40},
//     {name: "name77", age: 21},
//     {name: "name78", age: 36},
//     {name: "name79", age: 26},
//     {name: "name80", age: 23},
//     {name: "name81", age: 32},
//     {name: "name82", age: 45},
//     {name: "name83", age: 18},
//     {name: "name84", age: 37},
//     {name: "name85", age: 28},
//     {name: "name86", age: 30},
//     {name: "name87", age: 25},
//     {name: "name88", age: 30},
//     {name: "name89", age: 22},
//     {name: "name90", age: 28},
//     {name: "name91", age: 35},
//     {name: "name92", age: 19},
//     {name: "name93", age: 42},
//     {name: "name94", age: 27},
//     {name: "name95", age: 31},
//     {name: "name96", age: 24},
//     {name: "name97", age: 38},
//     {name: "name98", age: 29},
//     {name: "name99", age: 33},
//     {name: "name100", age: 40}
// ];
// let prev = document.getElementById('prev')
// let next = document.getElementById('next')
// part = 1
//
// let clickFunction = (part, limit = 10) => {
//     const div = document.getElementById('div2')
//
//     let start = (part - 1) * limit;
//     let end = part * limit;
//     if (start > 0) {
//         prev.removeAttribute('disabled');
//     } else {
//         prev.setAttribute('disabled', 'disabled')
//     } if (end === hundred.length){
//         next.setAttribute('disabled', 'disabled')
//     } else {
//         next.removeAttribute('disabled')
//     }
//     let arr=[];
//     for (let i = start; i < end; i++) {
//         let partOfTen = document.createElement('div')
//         let name = document.createElement('div')
//         let age = document.createElement('div')
//               partOfTen.classList.add('decoration')
//         let user = hundred[i]
//         name.innerHTML = `Name -- ${user.name}`;
//         age.innerHTML = `Age -- ${user.age}`;
//         partOfTen.append(name, age);
//         arr.push(partOfTen)
//     }
// div.replaceChildren(...arr)
// }
//
// clickFunction(part)
// prev.addEventListener('click', ()=> clickFunction(part -= 1));
// next.addEventListener('click', ()=> clickFunction(part += 1));

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

// let divText = document.getElementById('text')
// let btn = document.getElementById('btn')
// btn.addEventListener('click', function (){
//     divText.hidden = true;
// });

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.forms[0]
// form.onsubmit = function (e){
//     e.preventDefault()
//     let age = this.age.value
//     if (age < 18){
//     alert('your age less then 18')
//     } else {}
//     alert('Nice, your are adult')
// }

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let form = document.forms[0]
// form.onsubmit = function (e) {
//     e.preventDefault()
//     let row = document.getElementById('rowCount').value;
//     let cell = document.getElementById('cellCount').value;
//     let content = document.getElementById('content').value;
//      let tableHtml = '<table style="border: 1px solid black;">';
//
//      for (let i = 0; i < row; i++) {
//          tableHtml += '<tr style="background-color: lightsteelblue; color: #333;">';
//          for (let n = 0; n < cell; n++) {
//              tableHtml += '<td style="border: 1px dashed pink">' + content + '</td>';
//          }
//          tableHtml += '</tr>';
//      }
//      tableHtml += '</table>';
// document.getElementById('container').innerHTML = tableHtml;
// }

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині
// якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


const block = document.getElementById('div3');

const currentDate =  new Date().getTime();
const date = Number(localStorage.getItem('lastRefresh')) || currentDate;
let count  =  Number(localStorage.getItem('count')) || 100;

if  (currentDate - date > 1000) {
    count += 10;
    localStorage.setItem('count', count);
}

localStorage.setItem('lastRefresh', currentDate.toString());
block.innerText = `${count}грн`;