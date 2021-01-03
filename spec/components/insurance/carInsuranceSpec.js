const expect = require('chai').expect;

const CarInsurance = require('../../../src/components/insurance/carInsurance').CarInsurance;
const Product = require('../../../src/components/insurance/products/product').Product;

describe("cardInssurance", function() {
  
  it("should return products with updated prices", function() {
    
    const carInsurance = new CarInsurance([
        new Product('productName1', 10, 20)
    ]);
    const products = carInsurance.updatePrices();

    expectedProduct1 = new Product('productName1', 10, 20);
    expectedProduct1.updateSellInDaysAndPrice();
    
    expect(products).to.eql([
        expectedProduct1
    ]);
  });

  it("should return an empty array of products", function() {
    
    const carInsurance = new CarInsurance();
    const products = carInsurance.updatePrices();
    
    expect(products).to.eql([]);
  });
});