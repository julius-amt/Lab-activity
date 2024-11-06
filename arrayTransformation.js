/**
 * @param {number[]} arr An array of numbers to double
 * @returns {number[]} An array of doubled numbers
 */
const double = arr => {
    const doubledNums = [];
    arr.forEach(num => {
        doubledNums.push(num * 2);
    })
    return doubledNums;
}

/**
 * @param {number[]} arr An array of numbers to filter for even numbers
 * @returns {number[]} An array of even numbers
 */
const filterEven = arr => {
    const evenNums = [];
    arr.forEach(num => {
        if (num % 2 === 0) {
            evenNums.push(num);
        }
    })
    return evenNums;
}

/**
 * @param {number[]} arr An array of numbers to be summed
 * @returns {number} The sum of the numbers in the array
 */
const sum = arr => arr.reduce((accumulator, num) => accumulator + num, 0);

/**
 * @param {number[]} arr An array of numbers to be averaged
 * @returns {number} The average of the numbers in the array
 */
const average = arr => {
    const sumOfNumbers = sum(arr);
    return sumOfNumbers / arr.length;
}


// Testing the functions
// double
// console.log(double([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
// console.log(double([2, 4, 6, 8, 10])); // [4, 8, 12, 16, 20]
// console.log(double([12, 15])); // [24, 30]

// filterEven
// console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]
// console.log(filterEven([2, 4, 6, 8, 10])); // [2, 4, 6, 8, 10]
// console.log(filterEven([12, 15])); // [12]

// sum
// console.log(sum([1, 2, 3, 4, 5])); // 15
// console.log(sum([2, 4, 6, 8, 10])); // 30
// console.log(sum([12, 15])); // 27

// average
// console.log(average([1, 2, 3, 4, 5])); // 3
// console.log(average([2, 4, 6, 8, 10])); // 6
// console.log(average([12, 15])); // 13.5

// export functions for function composition
export {
    double,
    filterEven,
    sum,
    average
}