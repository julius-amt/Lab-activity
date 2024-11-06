/**
* @param {string} str The string to capitalize
*/
const capitalize = str => {
    const firstCharInCaps = str.charAt(0).toUpperCase();
    const remainingChars = str.slice(1).toLowerCase();
    return firstCharInCaps + remainingChars;
}

/**
* @param {string} str The string to reverse
*/
const reverse = str => {
    const arrOfWords = str.split('')
    const reversedWords = arrOfWords.reverse()
    const joinedReversedWords = reversedWords.join('');
    return joinedReversedWords;
}

/**
* @param {string} str The string to check if it is a palindrome
*/
const isPalindrome = str => {
    const reversedString = reverse(str);
    return str === reversedString;
}

/**
* @param {string} str The string to count the number of words
*/
const wordCount = str => {
    if (str.length === 0) {
        return 0;
    }
    const arrayOfWords = str.split(' ');
    return arrayOfWords.length;
}

// Testing the functions
// capitalize
// console.log(capitalize('amaliTech') === 'Amalitech'); // true
// console.log(capitalize('workinG') === 'Working'); // true
// console.log(capitalize('well') === 'well'); // false

// reverse
// console.log(reverse('hello') === 'olleh'); // true
// console.log(reverse('world') === 'dlrow'); // true
// console.log(reverse('moriaty') === 'moriaty'); // false

// isPalindrome
// console.log(isPalindrome('madam') === true); // true
// console.log(isPalindrome('racecar') === true); // true
// console.log(isPalindrome('hello') === false); // true

// wordCount
// console.log(wordCount('I belong to the Amalitech Sevice Center') === 7); // true
// console.log(wordCount('hello world') === 2); // true
// console.log(wordCount('The quick brown fox jumps over the lazy dog') === 9); // true

// export functions for function composition
export {
    capitalize,
    reverse,
    isPalindrome,
    wordCount
}