const expect = require('chai').expect;
const FullCoverage = require('../../../../src/components/insurance/products/fullCoverage');
const Product = require('../../../../src/components/insurance/products/product').Product;

describe("fullCoverage", function () {

    it("should create product with correct values", function () {
        const product = new FullCoverage(FullCoverage.FULL_COVERAGE_NAME, 1, 2);
        expect(product.name).equal(FullCoverage.FULL_COVERAGE_NAME);
        expect(product.sellIn).equal(1);
        expect(product.price).equal(2);
    });

    it("should update price and sellin correctly", function () {
        const product = new FullCoverage(FullCoverage.FULL_COVERAGE_NAME, 1, 2);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(FullCoverage.FULL_COVERAGE_NAME);
        expect(product.sellIn).equal(0);
        expect(product.price).equal(3);
    });

    it("should keep the price at maximum alowed", function () {
        const product = new FullCoverage(FullCoverage.FULL_COVERAGE_NAME, 1, Product.MAX_PRICE_ALLOWED);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(FullCoverage.FULL_COVERAGE_NAME);
        expect(product.sellIn).equal(0);
        expect(product.price).equal(Product.MAX_PRICE_ALLOWED);
    });
});