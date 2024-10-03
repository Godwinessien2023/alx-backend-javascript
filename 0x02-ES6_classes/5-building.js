#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */

export default class Building {
    constructor(sqft) {
      // Validate 'sqft' is a number
      if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
      }
      
      // Assign attribute with underscore convention
      this._sqft = sqft;
    }
  
    // Getter for 'sqft'
    get sqft() {
      return this._sqft;
    }
  
    // Method to enforce implementation in subclasses
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
