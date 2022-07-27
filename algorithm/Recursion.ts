/**
 * - Recursion is a function that has a base case and a recursive case. 
 * - A recursive function calls itself repeatly until a base case is met.
 */

// fib(1) == 1
// fib(2) == 1
// fib(n) == fib(n-1) + fib(n-2)
// 1 1 2 3 5 8 ...
// Time complexity - O(2^n)
/**
 * @params the number to search
 * @returns the index of the number in the algorithm
 */
function fib(n: number): number {
    if ( n === 1 || n == 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

console.log('fibonacci # -->',fib(3), '\n')

/**
 * @param array 
 * @param index 
 */
// Time Complexity O(N)
function iterate(array: any[], index: number) {
    if (index >= array.length) {
        return;
    } else {
        console.log(array[index]);
        iterate(array, index + 1);
    }
}

iterate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3);