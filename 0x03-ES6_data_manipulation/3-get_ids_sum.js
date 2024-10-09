#!/usr/bin/node
/* eslint-disable */
/* eslint-disable no-unused-vars */
const getStudentIdsSum = (students) => students.reduce((preVal, cur) => preVal + cur.id, 0);
