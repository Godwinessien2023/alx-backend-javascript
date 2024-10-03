#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */


export default class Airport {
    constructor(name, code) {
      // Validate 'name' and 'code' are strings
      if (typeof name !== 'string' || typeof code !== 'string') {
        throw new TypeError('Name and code must be strings');
      }
  
      // Assign attributes with underscore convention
      this._name = name;
      this._code = code;
    }
  
    // Getter for 'name'
    get name() {
      return this._name;
    }
  
    // Getter for 'code'
    get code() {
      return this._code;
    }
  
    // Override the default toString method to return the airport code
    toString() {
      return this._code;
    }
  }
  