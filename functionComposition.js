import {capitalize, reverse, isPalindrome} from './stringTranformation.js';
import {double, filterEven, sum, average} from './arrayTransformation.js';

const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

const reverseAndCapitalize = compose(capitalize, reverse);

const reverseCapitalizeAndCheckPalindrome = compose(isPalindrome, capitalize, reverse);

const doubleEvenNumbersAndSum = compose(sum, double, filterEven);

const doubleThenAverage = compose(average, double);

const filterEvenThenSum = compose(sum, filterEven);

// texting the functions
console.log(reverseAndCapitalize('hello')); // Olleh
console.log(reverseCapitalizeAndCheckPalindrome('madam')); // true
console.log(doubleEvenNumbersAndSum([1, 2, 3, 4, 5, 6])); // 24
console.log(doubleThenAverage([6, 7, 8, 9, 0])); // 12
console.log(filterEvenThenSum([1, 2, 3, 4, 5])); // 6
