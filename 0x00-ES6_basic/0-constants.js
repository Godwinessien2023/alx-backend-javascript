export function taskFirst () {
  const task = 'I prefer const when I can.'; // Use const since task is not reassigned
  return task;
}

export function getLast () {
  return ' is okay';
}

export function taskNext () {
  let combination = 'But sometimes let'; // Use let since combination will be reassigned
  combination += getLast(); // Reassign combination by concatenating

  return combination;
}
