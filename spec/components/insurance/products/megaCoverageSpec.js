const expect = require('chai').expect;
const MegaCoverage = require('../../../../src/components/insurance/products/megaCoverage')

describe("megaCoverage", function () {

    it("should create product with mega default values", function () {
        const product = new MegaCoverage(MegaCoverage.MEGA_COVERAGE_NAME, 1, 2);
        expect(product.name).equal(MegaCoverage.MEGA_COVERAGE_NAME);
        expect(product.sellIn).equal(1);
        expect(product.price).equal(80);
    });

    it("should maintain mega default values after update", function () {
        const product = new MegaCoverage(MegaCoverage.MEGA_COVERAGE_NAME, 1, 2);
        product.updateSellInDaysAndPrice();

        expect(product.name).equal(MegaCoverage.MEGA_COVERAGE_NAME);
        expect(product.sellIn).equal(1);
        expect(product.price).equal(80);
    });
});