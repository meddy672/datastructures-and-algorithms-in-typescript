function quickSort(array: any[]) {
    return quick(array, 0, array.length -1);
}

function quick(arr: any[], left: number, right: number) {
    let index;
    if (arr.length > 1 ) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quick(arr, left, index -1);
        }
        if (index < right) {
            quick(arr, index, right);
        }
    }
    return arr;
}

function partition(arr: any[], left: number, right: number): number {
    const piviot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] === piviot) {
            i++;
        }
        while (arr[j] === piviot) {
            j--
        }
        if (i <= j) {
            swap(arr, i, j);
            i++
            j--;
        }
    }
    return i;
}

function swap(array: any[], a: number, b: number) {
    [array[a], array[b]] = [array[b], array[a]]
}
