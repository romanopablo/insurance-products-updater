const expect = require('chai').expect;
const ProductFactory = require('../../../../src/components/insurance/products/productFactory')
const Low = require('../../../../src/components/insurance/products/lowCoverage');
const Medium = require('../../../../src/components/insurance/products/mediumCoverage');
const Full = require('../../../../src/components/insurance/products/fullCoverage');
const Mega = require('../../../../src/components/insurance/products/megaCoverage');
const SpecialFull = require('../../../../src/components/insurance/products/specialFullCoverage');
const SuperSale = require('../../../../src/components/insurance/products/superSaleCoverage');


describe("productFactory", function () {

    it("should create product Low Coverage Product", function () {
        const product = ProductFactory.create('Low Coverage', 5, 7);
        expect(product instanceof Low).to.be.true;
    });

    it("should create product Medium Coverage Product", function () {
        const product = ProductFactory.create('Medium Coverage', 5, 7);
        expect(product instanceof Medium).to.be.true;
    });

    it("should create product Full Coverage Product", function () {
        const product = ProductFactory.create('Full Coverage', 5, 7);
        expect(product instanceof Full).to.be.true;
    });

    it("should create product Mega Coverage Product", function () {
        const product = ProductFactory.create('Mega Coverage', 5, 7);
        expect(product instanceof Mega).to.be.true;
    });

    it("should create product Special Full Covera Product", function () {
        const product = ProductFactory.create('Special Full Coverage', 5, 7);
        expect(product instanceof SpecialFull).to.be.true;
    });

    it("should create product Super Sale Product", function () {
        const product = ProductFactory.create('Super Sale', 5, 7);
        expect(product instanceof SuperSale).to.be.true;
    });

    it("should throw Error", function () {
        expect(() => ProductFactory.create('Not Valid Product Name', 5, 7))
            .to.throw('Unknown Product Name');
    });

});