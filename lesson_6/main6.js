// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hw = 'hello world'
console.log(hw.length);
let jic = 'javascript is cool'
console.log(jic.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let up = 'hello world'
let to = up.toUpperCase()
console.log(to);
let up1 = 'lorem ipsum'
let to1 = up1.toUpperCase()
console.log(to1);
let up2 = 'javascript is cool'
let to2 = up2.toUpperCase()
console.log(to2);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let down = 'HELLO WORLD'
let toD = down.toLowerCase()
console.log(toD);
let down1 = 'LOREM IPSUM'
let toD1 = down1.toLowerCase()
console.log(toD1);
let down2 = 'JAVASCRIPT IS COOL'
let toD2 = down2.toLowerCase()
console.log(toD2);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty =' dirty string   '
let clen = dirty.trim()
console.log(clen);
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    function stringToArray(string){
        return  string.split(' ')
    }
let toArray1 = stringToArray(str);
console.log(toArray1);
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
let toString = arr.map(arr => JSON.stringify(arr))
console.log(toString);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
    function sortNums(direction, arr){
        if (direction === 'ascending'){
                return arr.sort((a,b) => a - b)
        } else if(direction === 'descending'){
            return arr.sort((a, b) => b - a)
        } else {
            console.log('Set the direction')
        }
    }
    let sort = sortNums('ascending', [12, 22, 3,4,11,5,222,2])
console.log(sort);

//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let arrSort = coursesAndDurationArray.sort
((a, b) => b.monthDuration -a.monthDuration)
console.log(arrSort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter((cource) => cource.monthDuration > 5);
console.log(filter);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((cource, index)=>{
    return {
        id : index,
        title : cource.title,
        monthDuration : cource.monthDuration
    };
});
console.log(map);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let cards = [
//     {cardSuit:'Spades', value:'6', color:'black',},
//     {cardSuit:'Spades', value:'7', color:'black',},
//     {cardSuit:'Spades', value:'8', color:'black',},
//     {cardSuit:'Spades', value:'9', color:'black',},
//     {cardSuit:'Spades', value:'10', color:'black',},
//     {cardSuit:'Spades', value:'Jack', color:'black',},
//     {cardSuit:'Spades', value:'Queen', color:'black',},
//     {cardSuit:'Spades', value:'King', color:'black',},
//     {cardSuit:'Spades', value:'Ace', color:'black',},
//     {cardSuit:'Clubs', value:'6', color:'black',},
//     {cardSuit:'Clubs', value:'7', color:'black',},
//     {cardSuit:'Clubs', value:'8', color:'black',},
//     {cardSuit:'Clubs', value:'9', color:'black',},
//     {cardSuit:'Clubs', value:'10', color:'black',},
//     {cardSuit:'Clubs', value:'Jack', color:'black',},
//     {cardSuit:'Clubs', value:'Queen', color:'black',},
//     {cardSuit:'Clubs', value:'King', color:'black',},
//     {cardSuit:'Clubs', value:'Ace', color:'black',},
//     {cardSuit:'Diamonds', value:'6', color:'red',},
//     {cardSuit:'Diamonds', value:'7', color:'red',},
//     {cardSuit:'Diamonds', value:'8', color:'red',},
//     {cardSuit:'Diamonds', value:'9', color:'red',},
//     {cardSuit:'Diamonds', value:'10', color:'red',},
//     {cardSuit:'Diamonds', value:'Jack', color:'red',},
//     {cardSuit:'Diamonds', value:'Queen', color:'red',},
//     {cardSuit:'Diamonds', value:'King', color:'red',},
//     {cardSuit:'Diamonds', value:'Ace', color:'red',},
//     {cardSuit:'Hearts', value:'6', color:'red',},
//     {cardSuit:'Hearts', value:'7', color:'red',},
//     {cardSuit:'Hearts', value:'8', color:'red',},
//     {cardSuit:'Hearts', value:'9', color:'red',},
//     {cardSuit:'Hearts', value:'10', color:'red',},
//     {cardSuit:'Hearts', value:'Jack', color:'red',},
//     {cardSuit:'Hearts', value:'Queen', color:'red',},
//     {cardSuit:'Hearts', value:'King', color:'red',},
//     {cardSuit:'Hearts', value:'Ace', color:'red',},
// ];
// // - знайти піковий туз
// let ace = cards.find(card => card.value === 'Ace' && card.cardSuit === 'Spades')
// console.log(ace);
// // - всі шістки
// let six = cards.filter(card => card.value === '6')
// console.log(six);
// // - всі червоні карти
// let red = cards.filter(card => card.color === 'red');
// console.log(red);
// // - всі буби
// let diamond = cards.filter(card => card.cardSuit === 'Diamonds')
// console.log(diamond);
// // - всі трефи від 9 та більше
// let clubs = cards.filter((card) => card.cardSuit === 'Clubs' && ['10', 'Jack', 'Queen', 'King', 'Ace'].includes(card.value));
// console.log(clubs);
// // =========================

let cards = [
    {cardSuit:'Spades', value:'6', color:'black',},
    {cardSuit:'Spades', value:'7', color:'black',},
    {cardSuit:'Spades', value:'8', color:'black',},
    {cardSuit:'Spades', value:'9', color:'black',},
    {cardSuit:'Spades', value:'10', color:'black',},
    {cardSuit:'Spades', value:'Jack', color:'black',},
    {cardSuit:'Spades', value:'Queen', color:'black',},
    {cardSuit:'Spades', value:'King', color:'black',},
    {cardSuit:'Spades', value:'Ace', color:'black',},
    {cardSuit:'Clubs', value:'6', color:'black',},
    {cardSuit:'Clubs', value:'7', color:'black',},
    {cardSuit:'Clubs', value:'8', color:'black',},
    {cardSuit:'Clubs', value:'9', color:'black',},
    {cardSuit:'Clubs', value:'10', color:'black',},
    {cardSuit:'Clubs', value:'Jack', color:'black',},
    {cardSuit:'Clubs', value:'Queen', color:'black',},
    {cardSuit:'Clubs', value:'King', color:'black',},
    {cardSuit:'Clubs', value:'Ace', color:'black',},
    {cardSuit:'Diamonds', value:'6', color:'red',},
    {cardSuit:'Diamonds', value:'7', color:'red',},
    {cardSuit:'Diamonds', value:'8', color:'red',},
    {cardSuit:'Diamonds', value:'9', color:'red',},
    {cardSuit:'Diamonds', value:'10', color:'red',},
    {cardSuit:'Diamonds', value:'Jack', color:'red',},
    {cardSuit:'Diamonds', value:'Queen', color:'red',},
    {cardSuit:'Diamonds', value:'King', color:'red',},
    {cardSuit:'Diamonds', value:'Ace', color:'red',},
    {cardSuit:'Hearts', value:'6', color:'red',},
    {cardSuit:'Hearts', value:'7', color:'red',},
    {cardSuit:'Hearts', value:'8', color:'red',},
    {cardSuit:'Hearts', value:'9', color:'red',},
    {cardSuit:'Hearts', value:'10', color:'red',},
    {cardSuit:'Hearts', value:'Jack', color:'red',},
    {cardSuit:'Hearts', value:'Queen', color:'red',},
    {cardSuit:'Hearts', value:'King', color:'red',},
    {cardSuit:'Hearts', value:'Ace', color:'red',},
];
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const reduce1 = cards.reduce((accumulator, card) => {
        accumulator[card.cardSuit].push(card);
    return accumulator;
}, { Spades: [], Clubs: [], Diamonds: [], Hearts: [] });
console.log(reduce1);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let saas = coursesArray.find((cour) => cour.modules.includes('sass'));
console.log(saas);
// --написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.find((cour) => cour.modules.includes('docker'));
console.log(docker);