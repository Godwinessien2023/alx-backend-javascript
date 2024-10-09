#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function taskFirst() {
	const task = 'I prefer const when I can.';
	return task;
}

export default function getLast() {
	return ' is okay';
}

export default function taskNext() {
	let combination = 'But sometimes let';
	combination += getLast();
	
	return combination;
}
