#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */

import Currency from './3-currency.js';  // Import Currency class

export default class Pricing {
  constructor(amount, currency) {
    // Validate 'amount' is a number
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    // Validate 'currency' is an instance of the Currency class
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }

    // Assign attributes with underscore convention
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for 'amount'
  get amount() {
    return this._amount;
  }

  // Setter for 'amount'
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // Getter for 'currency'
  get currency() {
    return this._currency;
  }

  // Setter for 'currency'
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = newCurrency;
  }

  // Method to display full price: "amount currency_name (currency_code)"
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
