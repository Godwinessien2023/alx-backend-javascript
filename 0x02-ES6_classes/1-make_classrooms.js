#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */

// 1-initializeRooms.js
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
