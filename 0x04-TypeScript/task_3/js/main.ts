/// <reference path="../js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from '../js/crud';

// Create the RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age and create an updatedRow object
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
