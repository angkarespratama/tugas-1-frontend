const minimalist = [1, 2];

let poppedElement = minimalist.pop(); // Removes 2 from the end and assigns it to poppedElement
console.log(minimalist); // Output: [1]
console.log(poppedElement); // Output: 2

let newLength = minimalist.push(3, 4); // Adds 3 and 4 to the end and returns the new length of the array (2 + 2 = 4)
console.log(minimalist); // Output: [1, 3, 4]
console.log(newLength); // Output: 4

let shiftedElement = minimalist.shift(); // Removes 1 from the beginning and assigns it to shiftedElement
console.log(minimalist); // Output: [3, 4]
console.log(shiftedElement); // Output: 1

let newLengthAfterUnshift = minimalist.unshift(5, 6); // Adds 5 and 6 to the beginning and returns the new length of the array (2 + 2 = 4)
console.log(minimalist); // Output: [5, 6, 3, 4]
console.log(newLengthAfterUnshift); // Output: 4