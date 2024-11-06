# Lab 1: Function Composition and Transformation

## Overview

This project demonstrates various transformation functions on arrays, objects, and strings, and showcases function composition in JavaScript. The project is structured into different modules, each handling specific types of transformations.


### Files and Their Responsibilities

- **arrayTransformation.js**: Contains functions to transform arrays of numbers.
- **functionComposition.js**: Demonstrates function composition using the transformation functions from other modules.
- **objectTransformation.js**: Contains functions to transform objects, particularly person objects.
- **stringTranformation.js**: Contains functions to transform strings.
- **package.json**: Contains project metadata and configuration.

## Functions

### Array Transformation Functions

Defined in [arrayTransformation.js](arrayTransformation.js):

- **`double(arr)`**: Doubles each number in the array.
- **`filterEven(arr)`**: Filters out odd numbers, returning only even numbers.
- **`sum(arr)`**: Sums all numbers in the array.
- **`average(arr)`**: Calculates the average of the numbers in the array.

### Object Transformation Functions

Defined in [objectTransformation.js](objectTransformation.js):

- **`fullName(person)`**: Returns the full name of a person object.
- **`isAdult(person)`**: Checks if the person is an adult (age >= 18).
- **`filterByAge(person, minAge)`**: Filters an array of person objects by a minimum age.

### String Transformation Functions

Defined in [stringTranformation.js](stringTranformation.js):

- **`capitalize(str)`**: Capitalizes the first letter of the string.
- **`reverse(str)`**: Reverses the string.
- **`isPalindrome(str)`**: Checks if the string is a palindrome.
- **`wordCount(str)`**: Counts the number of words in the string.

## Function Composition

Defined in [functionComposition.js](functionComposition.js):

- **`compose(...fns)`**: Composes multiple functions into a single function.
- **`reverseAndCapitalize`**: Composes `reverse` and `capitalize` functions.
- **`reverseCapitalizeAndCheckPalindrome`**: Composes `reverse`, `capitalize`, and `isPalindrome` functions.
- **`doubleEvenNumbersAndSum`**: Composes `filterEven`, `double`, and `sum` functions.
- **`doubleThenAverage`**: Composes `double` and `average` functions.
- **`filterEvenThenSum`**: Composes `filterEven` and `sum` functions.

## Usage

To run the project, ensure you have Node.js installed. Then, execute the following command in your terminal:

```sh
node functionComposition.js
```

Replace `functionComposition.js` above with any of the fucntion to be tested.

This will run the functionComposition.js file, which demonstrates the composed functions with example inputs.

Testing
The project includes console logs for testing the functions. Uncomment the relevant lines in each file to see the output of the functions with example inputs.

