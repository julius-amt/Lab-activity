import {capitalize, reverse, isPalindrome, wordCount} from './stringTranformation.js';
import {double, filterEven, sum, average} from './arrayTransformation.js';

const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

const reverseAndCapitalize = compose(capitalize, reverse);
console.log(reverseAndCapitalize('hello')); // Olleh

const reverseCapitalizeAndCheckPalindrome = compose(isPalindrome, capitalize, reverse);
console.log(reverseCapitalizeAndCheckPalindrome('madam')); // true

const doubleEvenNumbersAndSum = compose(sum, double, filterEven);
console.log(doubleEvenNumbersAndSum([1, 2, 3, 4, 5, 6])); // 24

const doubleThenAverage = compose(average, double);
console.log(doubleThenAverage([6, 7, 8, 9, 0])); // 12

const filterEvenThenSum = compose(sum, filterEven);
console.log(filterEvenThenSum([1, 2, 3, 4, 5])); // 6