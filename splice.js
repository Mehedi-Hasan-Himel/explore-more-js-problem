const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

// remove element from array
// and if nesesary insert new element in their place.
// returning and deleteing element from array
// will change original array

const partial = friends.splice(2, 5, 99, 555, 7777);
console.log(partial);
console.log(friends);