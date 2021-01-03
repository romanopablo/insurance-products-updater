const Product = require('./product').Product;

class LowCoverage extends Product {
    
    static LOW_COVERAGE_NAME = 'Low Coverage';
    
    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }
}
 
module.exports = LowCoverage;