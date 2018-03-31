let money = prompt('Ваш бюджет?');
let name = prompt('Название вашего магазина?');

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

mainList.shopGoods[0] = prompt("Какой тип товара будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товара будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товара будем продавать?");

alert(mainList.budget / 30);

console.log(mainList);
