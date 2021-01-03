const expect = require('chai').expect;
const Product = require('../../../../src/components/insurance/products/product').Product
const SuperSaleCoverage = require('../../../../src/components/insurance/products/superSaleCoverage')

describe("superSaleCoverage", function () {

    it("should create product with correct values", function () {
        const product = new SuperSaleCoverage(SuperSaleCoverage.SUPER_SALE_COVERAGE_NAME, 1, 2);
        expect(product.name).equal(SuperSaleCoverage.SUPER_SALE_COVERAGE_NAME);
        expect(product.sellIn).equal(1);
        expect(product.price).equal(2);
    });

    it("should decrease price twice as fast as product default value", function () {
        const originalPrice = 10;
        const product = new SuperSaleCoverage(SuperSaleCoverage.SUPER_SALE_COVERAGE_NAME, 3, originalPrice);
        
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(SuperSaleCoverage.SUPER_SALE_COVERAGE_NAME);
        expect(product.sellIn).equal(2);
        const expectedPrice = originalPrice - (Product.DEFAULT_PRICE_UNITS_TO_UPDATE_PER_DAY * 2)
        expect(product.price).equal(expectedPrice);
    });
});