const Medium = require('./mediumCoverage');

class ProductFactory {
    create(name, sellIn, price) {
        switch (name) {
            case Medium.MEDIUM_COVERAGE_NAME:
                return new Medium(name, sellIn, price);
            
            //more coverages

            default:
                throw new Error('Unknown Product Name');
        }
    }
}

module.exports = new ProductFactory();