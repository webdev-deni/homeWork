let money, name, time, price

function start() {
	money = prompt('Ваш бюджет?');

	while (isNaN(money) || money =="" || money == null) {
		money = prompt('Ваш бюджет?');
	}

	name = prompt('Название вашего магазина?').toUpperCase();
	time = 21;
}
//start ();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}


function chooseGoods() {
	for (let i = 0; i < 5; i++) {

		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) === 'string'  &&  (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
}
//chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть!');
		} else if(time > 8 && time < 20) {
		console.log('Время работать!')
			} else if(time < 24) {
			console.log('Уже слишком поздно!');
				} else {
				console.log('В сутках только 24 часа!');
				}
}

// function dayBudget() {
// 	alert("Ежедневный бюджет" + mainList.budget / 30)
// }

// function makeDiscount() {
// 	if (mainList.discount == true) {
// 		price = (price/100)*80;
// 	}
// }

// function hireEmployers() {
// 	for (let i = 1; i < 4; i++) {
// 		let name = prompt("Имя сотрудника?");
// 		mainList.employers[i] = name;
// 	}
// }



workTime(18);



console.log(mainList);


// пример1
// let num = 20;
// function showFirst(text) {
// 	alert(text);
// 	num = 10;
// }
// showFirst("Hello World!")
// console.log(num);
// пример1

// пример 2
// function calc(a,b) {
// 	return a+b
// }
// console.log(calc(4,5));
// console.log(calc(4,15));
// пример 2

// пример 3
// let calc = (a,b) => a+b
//  console.log(calc(4,5));
//  console.log(calc(4,15));
// пример 3

// пример 4 метод
// let str = "test";

// console.log(str.length)
// пример 4 получение числа(длинна) из кол-ва символов строки 

// пример 5 метод смена регистра 
// let str = "Test";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// пример 5 смена регистра 

// пример 6 метод округления чисел 
// let stw = "12.2";

// console.log(Math.round(stw));
// пример 6