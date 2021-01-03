const Product = require('./product').Product;

class SpecialFull extends Product {

    static SPECIAL_FULL_COVERAGE_NAME = 'Special Full Coverage';

    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }

    /** @override */
    _updatePrice() {
        this.price = this.price + this._getPriceToupdate();
        super._maxAndPositivePriceValidation();
    }

    /** @override */
    _getPriceToupdate(priceUnitsToUpdate = Product.DEFAULT_PRICE_UNITS_TO_UPDATE_PER_DAY) {

        if (this.sellIn == 0)
            return -this.price;
        if (this.sellIn <= 5)
            return 3;
        if (this.sellIn <= 10)
            return 2;

        return priceUnitsToUpdate;
    }
}

module.exports = SpecialFull;