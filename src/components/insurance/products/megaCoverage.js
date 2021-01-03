const Product = require('./product').Product;

class Mega extends Product {

    static MEGA_COVERAGE_NAME = 'Mega Coverage';
    static MEGA_COVERAGE_PRICE = 80;
    static MEGA_COVERAGE_SELLIN = 0;

    /** @override */
    constructor(name, sellIn, price) {
        super(name, sellIn);
        this.price = Mega.MEGA_COVERAGE_PRICE;
    }

    /** @override */
    updateSellInDaysAndPrice() {
    }
}

module.exports = Mega;