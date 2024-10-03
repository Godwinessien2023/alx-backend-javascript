#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */

export default class HolbertonClass {
    constructor(size, location) {
      // Validate 'size' is a number and 'location' is a string
      if (typeof size !== 'number') {
        throw new TypeError('size must be a number');
      }
      if (typeof location !== 'string') {
        throw new TypeError('location must be a string');
      }
  
      // Assign attributes with underscore convention
      this._size = size;
      this._location = location;
    }
  
    // Getter for 'size'
    get size() {
      return this._size;
    }
  
    // Getter for 'location'
    get location() {
      return this._location;
    }
  
    // Override valueOf to return the size when cast to a number
    valueOf() {
      return this._size;
    }
  
    // Override toString to return the location when cast to a string
    toString() {
      return this._location;
    }
  }
  