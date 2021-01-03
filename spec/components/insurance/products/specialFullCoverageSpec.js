const expect = require('chai').expect;
const SpecialFullCoverage = require('../../../../src/components/insurance/products/specialFullCoverage')

describe("specialFullCoverage", function () {

    it("should create product with correct values", function () {
        const product = new SpecialFullCoverage(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME, 1, 2);
        expect(product.name).equal(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME);
        expect(product.sellIn).equal(1);
        expect(product.price).equal(2);
    });

    it("should increase price by default value", function () {
        const product = new SpecialFullCoverage(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME, 15, 10);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME);
        expect(product.sellIn).equal(14);
        expect(product.price).equal(11);
    });

    it("when sellIn equal to 0 should update price to 0", function () {
        const product = new SpecialFullCoverage(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME, 0, 10);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME);
        expect(product.sellIn).equal(0);
        expect(product.price).equal(0);
    });

    it("when sellIn less than 5 should increase price by 3", function () {
        const product = new SpecialFullCoverage(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME, 4, 10);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME);
        expect(product.sellIn).equal(3);
        expect(product.price).equal(13);
    });

    it("when sellIn less than 10 should increase price by 2", function () {
        const product = new SpecialFullCoverage(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME, 8, 10);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(SpecialFullCoverage.SPECIAL_FULL_COVERAGE_NAME);
        expect(product.sellIn).equal(7);
        expect(product.price).equal(12);
    });
});