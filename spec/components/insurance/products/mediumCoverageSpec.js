const expect = require('chai').expect;
const MediumCoverage = require('../../../../src/components/insurance/products/mediumCoverage')

describe("mediumCoverage", function () {

    it("should create product with correct values", function () {
        const product = new MediumCoverage(MediumCoverage.MEDIUM_COVERAGE_NAME, 1, 2);
        expect(product.name).equal(MediumCoverage.MEDIUM_COVERAGE_NAME);
        expect(product.sellIn).equal(1);
        expect(product.price).equal(2);
    });

    it("should update price and sellin correctly", function () {
        const product = new MediumCoverage(MediumCoverage.MEDIUM_COVERAGE_NAME, 1, 3);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(MediumCoverage.MEDIUM_COVERAGE_NAME);
        expect(product.sellIn).equal(0);
        expect(product.price).equal(2);
    });

    it("should avoid negative sellIn and negative price", function () {
        const product = new MediumCoverage(MediumCoverage.MEDIUM_COVERAGE_NAME, 0, 1);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(MediumCoverage.MEDIUM_COVERAGE_NAME);
        expect(product.sellIn).equal(0);
        expect(product.price).equal(0);
    });
});