/**
 * - Merge Sort is a divide and conquer algorithm. It takes two unsorted arrays and combines them into sorted one array.
 * - Merge Sort will compare the each element in both arrays and compare their values and add them to a single array inorder.
 * - Merge Sort has a time complexity of O(log n) because it divides the arrary into smaller units then compares each element with the adjacent array to compare and merge.
 */

/**
 * 
 * @param array 
 */
function mergeSort( array: any[]): any[] {
    // take in a single array as a parameter
    // split the arrary into two halves
    if ( array.length > 1) {
        const { length } = array;
        const middleIndex = Math.floor(length / 2);
        const leftHalf = mergeSort(array.slice(0, middleIndex));
        const rightHalf = mergeSort(array.slice(middleIndex, length));
        array = merge(leftHalf, rightHalf);
    }
    return array;
}


/**
 * @param array1 
 * @param array2 
 */
function merge(leftHalf: any[], rightHalf: any[]): any[] {
    let result: any[] = [];

    while (leftHalf.length && rightHalf.length) {
        let minElement;
        if (leftHalf[0] < rightHalf[0]) minElement = leftHalf.shift();
        else minElement = rightHalf.shift();
        result.push(minElement);
    }

    if (leftHalf.length) result = result.concat(leftHalf);
    else result = result.concat(rightHalf);

    return result
}

console.log(mergeSort([1,90,37,2,8,7,13,3,1000,88,6]));