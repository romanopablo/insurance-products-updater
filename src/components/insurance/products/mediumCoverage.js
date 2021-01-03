const Product = require('./product').Product;

class Medium extends Product {

    static MEDIUM_COVERAGE_NAME = 'Medium Coverage';

    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }
}

module.exports = Medium;