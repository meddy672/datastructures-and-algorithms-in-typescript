/**
 * - A Palindrome is a word, phrase, or sequence that reads the same backward as forward
 */

/**
 * @param word - string
 * @returns true if string is palindrome and false if not
 */
function isPalindrome (word: string): Boolean {
    let index = 0;
    let lastpos = 1;
    while (index < word.length / 2) {
        let c1 = word[index];
        let c2 = word[word.length - lastpos];
        if (c1.toLocaleLowerCase() !== c2.toLocaleLowerCase()) {
            return false;
        }
        index++;
        lastpos++;
    }
    return true
}

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('civc')) // false
console.log(isPalindrome('mom')) // true
console.log(isPalindrome('dad')) // true
console.log(isPalindrome('rap')) // false
console.log(isPalindrome('Repaper')) // true
console.log(isPalindrome('Deified')) // true