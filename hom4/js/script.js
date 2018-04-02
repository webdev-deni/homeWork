let money, name, time, price

function start() {
	money = prompt('Ваш бюджет?');

	while (isNaN(money) || money =="" || money == null) {
		money = prompt('Ваш бюджет?', '');
	}

	name = prompt('Название вашего магазина?', '').toUpperCase();
	time = 21;
}
// start ();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {

			let a = prompt("Какой тип товаров будем продавать?", '');

			if ((typeof(a)) === 'string'  &&  (typeof(a)) != null && a != '' && a.length < 50 ) {
				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
				}
			}
		},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть!');
			} else if(time > 8 && time < 20) {
			console.log('Время работать!')
			mainList.open = true;
				} else if(time < 24) {
				console.log('Уже слишком поздно!');
					} else {
				console.log('В сутках только 24 часа!');
			}
		},
	dayBudget: function dayBudget() {
			alert("Ежедневный бюджет" + mainList.budget / 30)
		},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
				price = (price/100)*80;
			}
		},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4; i++) {
			let name = prompt("Имя сотрудника?");
			mainList.employers[i] = name;
			}
		},
	chooseShopItems: function chooseShopItems() {
		let items = prompt ("Перечислите через запятую товары", "");
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще", ""));
		mainList.shopItems.sort();
	},

}



// 	let first = [1, "secont",3,4,5]
// let i = 2;
// first[99] = 99;
// console.log(first.length)
// first.forEach(function(item,i,arr) {
// 	console.log(i + ": " + item + "(массив: " + arr + ")");
// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i = 1, arr) {
	
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });


console.log(mainList);


let arr = ["товар1", "товар2", "товар3", "товар4", "товар5"];
	arr.forEach(function(item,i,arr) {
		confirm(i + ": " + item + "(У нас вы можете купить: " + arr +")")
	})

// пример 1 
// let options ={
// 	name: "test",
// 	wsdth: 1024,
// 	heigth: 1024
// }
// options.bool = false;
// options.colors = {
// 	border: "black",
// 	background: "red"
// }
// delete.options.bool
// console.log(options)

// пример 2
// let arr = [1,2,3,4,5]
// arr.pop(); //уберает последнее
// arr.push(6);
// arr.shift();
// arr.unshift(0);
// arr.
// console.log(arr.pop()); //обращение к последней
// console.log(arr)

// пример 3
// let first = [1, "хлеб", 2, 8];
// first[10] = 11;
// first.forEach(function(item,i,arr) {
// 	console.log(i +": " + item + "(массив: "+arr+")")

// })

// пример 4
// let first = [1, "secont",3,4,5]
// let i = 2;
// first[99] = 99;
// console.log(first.length)
// first.forEach(function(item,i,arr) {
// 	console.log(i + ": " + item + "(массив: " + arr + ")");
// })

// пример 5 
// let first = ["wefwf", " wefwfwef", " wefwefewf"];
// let i = prompt("", "")
// first = i.split(",")

// console.log(first)

// пример 6 
// let first = ["wefwf", " wefwfwef", " wefwefewf"];
// let i = first.join(",")

// console.log(i)

// пример 7
// let first = ["cwefwf", "bwefwfwef", "awefwefewf"];
// let i = first.sort()

// console.log(i)

// пример 8 сортировка по номеру 
// let first = [77, 21, 18, 3];
// function sortNumbers(a,b) {
// 	return a - b;
// }
// let i = first.sort(sortNumbers)

// console.log(i)