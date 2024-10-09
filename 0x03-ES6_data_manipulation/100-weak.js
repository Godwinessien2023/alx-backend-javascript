#!/usr/bin/node
/* eslint-disable */
/* eslint-disable no-unused-vars */
export default function getListStudentIds(students) {
    if (!Array.isArray(students)) {
      return [];
    }
    return students.map(student => student.id);
  }
