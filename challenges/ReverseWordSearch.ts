/**
 * - Reverse word takes a string and reverses it's characters
 */


/**
 * @param word - a string used to reverse its characters 
 * @returns {string}
 */
function reverseWordSearch(word: string): string {
    if(isString(word)){
        let reverseWord: string = '';
        for (let index = word.length-1; index >= 0; index--) {
            const char = word[index];
            reverseWord += char;
        }
        return reverseWord;
    } else return 'Error word is not type string';
}

/**
 * @param x - helper function for for reverse word. 
 * @returns {Boolean}
 */
function isString(x: any): x is string {
    return !isUndefined(x) && typeof x === 'string' && x.length > 0;
}


/**
 * @param x - helper function for reverse word
 * @returns {Boolean}
 */
function isUndefined(x: any): x is undefined {
    return x === 'undefined';
}

console.log(reverseWordSearch('Hello World'));
console.log(reverseWordSearch('racecar'));
console.log(reverseWordSearch('123456789'));
console.log(reverseWordSearch([][0] + ''));
console.log(reverseWordSearch([''][0]));