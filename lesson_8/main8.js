// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone){
//     this.id= id;
//     this.name=name;
//     this.surname= surname;
//     this.email= email;
//     this.phone= phone
// }
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// const arr = [
//   new User(15,'Igor','Lokon', 'lokon@gmail.com', '38033332221' ),
//   new User(2,'Igor2','Lokon1', 'lokon@gmail.com', '38033332222' ),
//   new User(3,'Igor3','Lokon2', 'lokon@gmail.com', '38033332223' ),
//   new User(22,'Igor4','Lokon3', 'lokon@gmail.com', '38033332224' ),
//   new User(5,'Igor5','Lokon4', 'lokon@gmail.com', '38033332225' ),
//   new User(13,'Igor6','Lokon5', 'lokon@gmail.com', '38033332226' ),
//   new User(7,'Igor7','Lokon6', 'lokon@gmail.com', '38033332227' ),
//   new User(8,'Igor8','Lokon7', 'lokon@gmail.com', '38033332228' ),
//   new User(9,'Igor9','Lokon8', 'lokon@gmail.com', '38033332229' ),
//   new User(10,'Igor10','Lokon9', 'lokon@gmail.com', '38033332220' )
// ];
// console.log(arr);
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// const filterArr = arr.filter((user) => user.id % 2 === 0 );
// console.log(filterArr);
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortArr = arr.sort((a, b)=> a.id - b.id);
// console.log(sortArr);
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
// const arrClass = [
//     new Client(0, 'Luke', 'Sky', 'luke@gmail.com', '888833334444', ['kokos', 'milk', 'orange']),
//     new Client(1, 'Luke1', 'Sky1', 'luke@gmail.com', '888833334441', ['cigarettes', 'milk', 'orange']),
//     new Client(2, 'Luke2', 'Sky2', 'luke@gmail.com', '888833334442', ['kokos', 'cola','salt', 'orange']),
//     new Client(3, 'Luke3', 'Sky3', 'luke@gmail.com', '888833334443', ['kokos', 'oil', 'orange']),
//     new Client(4, 'Luke4', 'Sky4', 'luke@gmail.com', '888833334444', ['kokos', 'milk', 'pepsi','protein']),
//     new Client(5, 'Luke5', 'Sky5', 'luke@gmail.com', '888833334445', ['kokos', 'milk', 'orange', 'met']),
//     new Client(6, 'Luke6', 'Sky6', 'luke@gmail.com', '888833334446', ['kokos', 'milk']),
//     new Client(7, 'Luke7', 'Sky7', 'luke@gmail.com', '888833334447', ['chocolate', 'water', 'orange']),
//     new Client(8, 'Luke8', 'Sky8', 'luke@gmail.com', '888833334448', ['tangerine', 'milk','kiwi', 'orange']),
//     new Client(9, 'Luke9', 'Sky9', 'luke@gmail.com', '888833334449', ['kokos'])
// ]
// console.log(arrClass);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let orderSort =arrClass.sort((a,b)=> a.order.length - b.order.length);
// console.log(orderSort);
//
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// // виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model, maker, year, maxSpeed, engine){
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.driver = null;
//     this.drive = function drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function info (){
//         console.log('----------Information------------');
//         console.log('model :' ${this.model});
//         console.log('maker :' ${this.maker});
//         console.log('year :' ${this.year});
//         console.log('maxSpeed :' ${this.maxSpeed});
//         console.log('engine :' ${this.engine})
//         console.log('driver :' ${this.driver})
//         console.log('----------Information------------')
//     };
//     this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed){
//        this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function changeYear (newValue){
//         this.year = newValue
//     };
//     this.addDriver = function addDriver (driver){
//         this.driver = driver
//     }
// }


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, maker, year, maxSpeed, engine) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.driver = null;

        this.drive = function drive (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        this.info = function info(){
            console.log('----------Information------------')
            console.log('your model :' + this.model)
            console.log('maker :' + this.maker)
            console.log('year :' + this.year)
            console.log('maxSpeed :' + this.maxSpeed)
            console.log('engine :'+ this.engine)
            console.log('driver : ', this.driver)
            console.log('----------Information------------')
        };
        this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed){
            this.maxSpeed += newSpeed;
        };
        this.changeYear = function changeYear(newValue){
            this.year = newValue;
        };
        this.addDriver = function  addDriver(driver){
            this.driver = driver
        }
    }
}
// let cars = new Cars('zonda', 'Ferrari', 2009, 293, 7, );
// cars.addDriver('Antonio');
// cars.info()
// cars.increaseMaxSpeed(230)
// cars.info()
// cars.changeYear(2012)
// cars.info()
// cars.drive()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Shablone {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}
class Cinderella extends Shablone{
    constructor(name, age, footSize) {
        super(name, age)
        this.footSize = footSize
    }
}

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Shablone{
    constructor(name, age, shoesSize) {
        super(name, age)
        this.shoesSize = shoesSize
    }
    findPrinces (arr) {
        for (const princes of arr) {
            if(princes.footSize === this.shoesSize){
                return princes;
            }
        }
    }
    findPrinces2 (arr) {
       return arr.find((princes) => princes.footSize === this.shoesSize)
    }
}



//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

    let arrCinderellas = [
    new Cinderella('Ірина', 28, 38.),
    new Cinderella('Олександра', 35, 42.),
    new Cinderella('Христина', 22, 36.),
    new Cinderella('Марія', 30, 44.),
    new Cinderella('Анна', 25, 39.),
    new Cinderella('Сара', 32, 41.),
    new Cinderella('Катерина', 29, 37.),
    new Cinderella('Віра', 27, 43.),
    new Cinderella('Юлія', 26, 40.),
    new Cinderella('Дарина', 31, 45.)
]
let prince = new Prince('Alonso', 23, 36);
console.log(prince.findPrinces(arrCinderellas));
console.log('------another way-------')
let prince2 = new Prince('Alonso', 23, 39);
console.log(prince2.findPrinces2(arrCinderellas));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

