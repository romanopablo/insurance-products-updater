
class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  static DEFAULT_PRICE_UNITS_TO_UPDATE_PER_DAY = 1; //The price currency is not specified.
  static DAYS_TO_UPDATE_PER_DAY = 1;
  static MAX_PRICE_ALLOWED = 50;


  updateSellInDaysAndPrice() {
    this._updatePrice();
    this._updateSellInDays();
  }

  /**
   * Checks for negative and if not it substract one day to sellIn.
   * Note: the original script allows for negative sellIn days but it is confussing having negative remainding days.
   */
  _updateSellInDays() {
    if (this.sellIn > 0)
      this.sellIn = this.sellIn - Product.DAYS_TO_UPDATE_PER_DAY;
  }

  _updatePrice() {
    this.price = this.price - this._getPriceToupdate();
    this._maxAndPositivePriceValidation();
  }

  _getPriceToupdate(priceUnitsToUpdate = Product.DEFAULT_PRICE_UNITS_TO_UPDATE_PER_DAY) {
    if (this.sellIn == 0)
      return priceUnitsToUpdate * 2;

    return priceUnitsToUpdate;
  }

  _maxAndPositivePriceValidation() {
    if (this.price > Product.MAX_PRICE_ALLOWED)
      this.price = 50;

    if (this.price < 0)
      this.price = 0;
  }

}


module.exports = {
  Product
}