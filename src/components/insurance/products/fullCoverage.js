const Product = require('./product').Product;

class Full extends Product {

    static FULL_COVERAGE_NAME = 'Full Coverage';

    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }

    /** @override */
    _updatePrice() {
        this.price = this.price + super._getPriceToupdate();
        super._maxAndPositivePriceValidation();
    }
}

module.exports = Full;