
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		dairy: false,
		organic: false,
		nut: false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		dairy: false,
		organic: false,
		nut: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		dairy: false,
		organic: false,
		nut: false,
		price: 10.00
	},
	{
		name: "granola bar with peanuts",
		vegetarian: true,
		glutenFree: false,
		dairy: false,
		organic: false,
		nut: true,
		price: 2.50
	},
	{
		name: "cheeze",
		vegetarian: true,
		glutenFree: true,
		dairy: true,
		organic: false,
		nut: false,
		price: 4.50
	},
	{
		name: "eggs",
		vegetarian: false,
		glutenFree: true,
		dairy: false,
		organic: false,
		nut: false,
		price: 2.00
	},
	{
		name: "glutten free bread",
		vegetarian: true,
		glutenFree: true,
		dairy: false,
		organic: false,
		nut: false,
		price: 4.35
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		dairy: false,
		organic: false,
		nut: false,
		price: 1.05
	},
	{
		name: "organic apple",
		vegetarian: true,
		glutenFree: true,
		dairy: false,
		organic: true,
		nut: false,
		price: 2.90
	},
	{
		name: "organic granola bar",
		vegetarian: true,
		glutenFree: false,
		dairy: false,
		organic: false,
		nut: true,
		price: 4.35
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i = 0; i < prods.length; i += 1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
			product_names.push(prods[i].name);
		}
		else if (restriction == "None") {
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}