#!/usr/bin/node


import Building from './5-building.js';  // Import the Building class

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor to assign sqft
    super(sqft);

    // Validate 'floors' is a number
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    // Assign floors with underscore convention
    this._floors = floors;
  }

  // Getter for 'floors'
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
