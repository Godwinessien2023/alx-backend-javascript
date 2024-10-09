#!/usr/bin/node
/* eslint-disable */
/* eslint-disable no-unused-vars */
export default function getStudentsByLocation(students, city) {
    return students.filter((student) => student.location === city);
  }
