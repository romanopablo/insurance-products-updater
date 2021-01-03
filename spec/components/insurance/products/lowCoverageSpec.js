const expect = require('chai').expect;
const LowCoverage = require('../../../../src/components/insurance/products/lowCoverage')

describe("lowCoverage", function () {

    it("should create product with correct values", function () {
        const product = new LowCoverage(LowCoverage.LOW_COVERAGE_NAME, 1, 2);
        expect(product.name).equal(LowCoverage.LOW_COVERAGE_NAME);
        expect(product.sellIn).equal(1);
        expect(product.price).equal(2);
    });

    it("should update price and sellin correctly", function () {
        const product = new LowCoverage(LowCoverage.LOW_COVERAGE_NAME, 1, 2);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(LowCoverage.LOW_COVERAGE_NAME);
        expect(product.sellIn).equal(0);
        expect(product.price).equal(1);
    });
});