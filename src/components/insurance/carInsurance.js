class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }

    updatePrices() {
        for (var i = 0; i < this.products.length; i++) {
            this.products[i].updateSellInDaysAndPrice()
        }
        return this.products;
    }
}


module.exports = {
    CarInsurance
}