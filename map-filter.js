
/**
 * MAP - return new array
 */
const numbers = [3, 4,5,6, 7, 8];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);


function square(element) {
    const result2 = element * element;
    output.push(result2);
}
numbers.map(square);
numbers.map(function(element, index, array){
    console.log(element, index, array);
});

const result3 = numbers.map(x => x * x);
console.log(result3);

/**
 * Filter - return new array
 */

const bigger = numbers.filter( x => x > 5 );
console.log(bigger);

/**
 * Find - return single element
 */
const findArr = numbers.find(x => x > 5);
console.log(findArr);




