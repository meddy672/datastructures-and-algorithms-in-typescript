/**
 * - The TwoSum function takes two parameters one an {numberArray} and the other number {sum}
 * - The function searches the array and locates each number pair that sum up to the sum parameter
 * - If the function finds a pair that equates to the sum it is added to an array and returned as a pair
 * - Numbers in the numberArray can be used more than once
 */

/**
 * @param numberArray - array to search for numbers that eqaute to the sum
 * @param sum - the number a pair should equal
 */
function twoSum(numberArray: number[], sum: number): number[][] {
    const pairs: number[][] = [];
    const container: number[] = [];

    numberArray.forEach((currentNumber) => {

        const counterpart = sum - currentNumber;

        if (container.indexOf(counterpart) !== -1) {
            pairs.push([currentNumber, counterpart]);
        }

        container.push(currentNumber);
    });

    return pairs;
}

console.log(twoSum([91,3,7,3,5,2, 25], 8));