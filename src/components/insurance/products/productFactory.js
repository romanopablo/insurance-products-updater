const Medium = require('./mediumCoverage');
const Low = require('./lowCoverage');
const Full = require('./fullCoverage');
const Mega = require('./megaCoverage');
const SpecialFull = require('./specialFullCoverage');
const SuperSale = require('./superSaleCoverage');

class ProductFactory {
    create(name, sellIn, price) {
        switch (name) {
            case Medium.MEDIUM_COVERAGE_NAME:
                return new Medium(name, sellIn, price);

            case Low.LOW_COVERAGE_NAME:
                return new Low(name, sellIn, price);

            case Full.FULL_COVERAGE_NAME:
                return new Full(name, sellIn, price);

            case Mega.MEGA_COVERAGE_NAME:
                return new Mega(name, sellIn, price);

            case SpecialFull.SPECIAL_FULL_COVERAGE_NAME:
                return new SpecialFull(name, sellIn, price);

            case SuperSale.SUPER_SALE_COVERAGE_NAME:
                return new SuperSale(name, sellIn, price);

            default:
                throw new Error('Unknown Product Name');
        }
    }
}

module.exports = new ProductFactory();