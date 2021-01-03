'use strict';

//import
const ProductFactory = require('./components/insurance/products/productFactory');
const CarInsurance = require('./components/insurance/carInsurance').CarInsurance;

const productsAtDayZero = [
  ProductFactory.create('Medium Coverage', 10, 20),
  ProductFactory.create('Full Coverage', 2, 0),
  ProductFactory.create('Low Coverage', 5, 7),
  ProductFactory.create('Mega Coverage', 0, 80),
  ProductFactory.create('Mega Coverage', -1, 80),
  ProductFactory.create('Special Full Coverage', 15, 20),
  ProductFactory.create('Special Full Coverage', 10, 49),
  ProductFactory.create('Special Full Coverage', 5, 49),
  ProductFactory.create('Super Sale', 3, 6)
];

const carInsurance = new CarInsurance(productsAtDayZero);

const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrices().forEach(productPrinter);
  console.log('');
}