/**
 * @param {{firstName: string, lastName: string, [key: string]: any}[]} person An object with the following properties: firstName, lastName
 * @returns {string} The full name of the person
 */
const fullName = person => {
    return `${person.firstName} ${person.lastName}`;
}

/**
 * @param {{minAge: number, [key: string]: any}[]} person An object which includes age property
 * @returns {boolean} True if the person is an adult, false otherwise
 */
const isAdult = person => {
    return person.age >= 18;
}

/**
 * @param {{minAge: number, [key: string]: any}[]} person An array of objects which includes minAge property
 * @param {number} minAge The minimum age to filter by
 * @returns {{minAge: number, [key: string]: any}[]} An array of objects which includes only the people who are older than or equal to minAge
 */
const filterByAge = (person, minAge) => {
    return person.filter(person => person.age >= minAge);
}


// Objects to test the functions
const person1 = { firstName: 'John', lastName: 'Doe', age: 25 };
const person2 = { firstName: 'Sherlock', lastName: 'Holmes', age: 17 };
const person3 = { firstName: 'Micheal', lastName: 'Scotfield', age: 45 };


// Test functions
// fullName
console.log(fullName(person1)); // John Doe
console.log(fullName(person2)); // Sherlock Holmes
console.log(fullName(person3)); // Micheal Scotfield

// isAdult
console.log(isAdult(person1)); // true
console.log(isAdult(person2)); // false
console.log(isAdult(person3)); // true

// filterByAge
console.log(filterByAge([person1, person2, person3], 18));

// export functions for function composition
export {
    fullName,
    isAdult,
    filterByAge
}