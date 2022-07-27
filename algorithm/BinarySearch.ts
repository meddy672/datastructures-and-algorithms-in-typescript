/**
 * - A Binary search needs to be sorted first to reduce the time complexity to O(Log n)
 * - Binary search divides the array in half then checks if the seach key is equal to the item.
 * - If the value of the search key is less than the item in the middle, narrow the interval to the lower half.
 * - If the value of the search key is greater than the item in the middle, narrow the interval to the upper half.
 */

function binarySearch(array: any[], key: any): any {
    const sortedArray = array.sort((a:any, b: any) => a - b);
    let middleIdx = Math.floor(sortedArray.length / 2);
    let middleElem = sortedArray[middleIdx];

    if (middleElem === key) {
        return true;
    } 
    else if (middleElem < key && sortedArray.length > 1) {
        const arr = sortedArray.splice(middleIdx, sortedArray.length);
        return binarySearch(arr, key);
    }
    else if (middleElem > key && sortedArray.length > 1) {
        const arr = sortedArray.splice(0, middleIdx)
        return binarySearch(arr, key);
    }
    else return false;
    
}

const result = binarySearch([1,3, 45, 56, 13, 12, 88, 102, 100, 4], 56);

console.log(result)