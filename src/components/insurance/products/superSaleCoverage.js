const Product = require('./product').Product;

class SuperSaleCoverage extends Product {

    static SUPER_SALE_COVERAGE_NAME = 'Super Sale';

    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }

    /** @override */
    _getPriceToupdate() {
        return super._getPriceToupdate() * 2;
    }
}

module.exports = SuperSaleCoverage;