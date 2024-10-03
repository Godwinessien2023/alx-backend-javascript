#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */

export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    get [Symbol.toStringTag]() {
      return this._code;
    }
  }