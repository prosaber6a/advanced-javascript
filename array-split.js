const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const part = numbers.slice(2, 5);
console.log(part);

const removed = numbers.splice(2, 3, 77);
console.log(removed);

const together = numbers.join(", ");
console.log(together);
console.log(numbers);
