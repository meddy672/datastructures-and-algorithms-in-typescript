# Data Structures, Algorithms, and Program Challenges In Typescript
This repository serves up some common examples on how to implement some basic data structures, algorithms, and solve programming challenges using Typescript. It's a great place to start if you need to prepare for a software developer interview and need to see some code examples. 

## Table Of Contents
1. [Big O Notation](https://github.com/meddy672/datastructures-and-algoritms-api#big-o-notation)
    1. [Constant Time](https://github.com/meddy672/datastructures-and-algoritms-api#example---big-o1)
    2. [Linear Time](https://github.com/meddy672/datastructures-and-algoritms-api#example---big-on)
    3. [Logorithmic Time](https://github.com/meddy672/datastructures-and-algoritms-api#example---big-ologn)
    4. [Exponential Time](https://github.com/meddy672/datastructures-and-algoritms-api#example---big-on2)
2. [Algorithms](https://github.com/meddy672/datastructures-and-algoritms-api#algorithms)
    1. [Binary Search](https://github.com/meddy672/datastructures-and-algoritms-api#binary-search)
    2. [Quick Sort](https://github.com/meddy672/datastructures-and-algoritms-api#quick-sort)
    3. [Merge Sort](https://github.com/meddy672/datastructures-and-algoritms-api#merge-sort)
    4. [Recursion](https://github.com/meddy672/datastructures-and-algoritms-api#recursion)
3. [Data Structures](https://github.com/meddy672/datastructures-and-algoritms-api#data-structures)
    1. [List](https://github.com/meddy672/datastructures-and-algoritms-api#list)
    2. [Linked List](https://github.com/meddy672/datastructures-and-algoritms-api#linked-list)
    3. [Graphs](https://github.com/meddy672/datastructures-and-algoritms-api#graphs)
    4. [Stacks](https://github.com/meddy672/datastructures-and-algoritms-api#stacks)
    5. [Trees](https://github.com/meddy672/datastructures-and-algoritms-api#trees)
    6. [Hash Maps](https://github.com/meddy672/datastructures-and-algoritms-api#hash-maps)
4. [Prgramming Challenges](https://github.com/meddy672/datastructures-and-algoritms-api#programming-challenges)
    1. [FizzBuzz](https://github.com/meddy672/datastructures-and-algoritms-api#fizzbuzz)
    2. [Harmless Ransom Note](https://github.com/meddy672/datastructures-and-algoritms-api#harmless-ransom-note)
    3. [Palindrome](https://github.com/meddy672/datastructures-and-algoritms-api#palindrome)
    4. [Reverse Word Search](https://github.com/meddy672/datastructures-and-algoritms-api#reverse-word-search)
    5. [Two Sum](https://github.com/meddy672/datastructures-and-algoritms-api#two-sum)
5. [Design Patterns](https://github.com/meddy672/datastructures-and-algoritms-api#design-patterns)
6. [Interview Questions](https://github.com/meddy672/datastructures-and-algoritms-api#interview-questions)


## Big O Notation
Big O Notation allows us to estimate the worst case runtime of algorithm or how long it takes the algorithm to complete based on its input size. When you're trying to understand the Big O Notation of an algorithm, you want focus on the the amount of **Loops** that the algorithm uses to perform its job. The amount of loops that the algorithm uses inaccordance with the input size is what causes Big O(1), which is constant time, to go to Big O(n) or O(n^2). An algorithm that has Big O(n^2) uses to **for loops** to do its job.

#### Example - Big O(1)
```typescript
function getNumber(inputArray: number[]): number {
    let someNumber: number; // Constant time, never changes
    someNumber = inputArray[0]; // Constant time, never changes
    someNumber++; // Constant time, never changes
    return someNumber; // Constant time, never changes
}

getNumber([1,2,3,4,5,6]);
```

#### Example - Big O(n)
```typescript
function printArray(inputArray: number[]): void {
    // Linear time, As input size increases so does the runtime
    inputArray.forEach(number => console.log(number)); 
}

printArray([1,2,3,4,5,6]);
printArray([1,2,3,4,5,6,7,8,9]);
printArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, ... ,100]);
```
#### Example - Big O(log(n))
```typescript
function binarySearch(array: number[], key: number): number {
    const sortedArray =  array.sort((prev, next) => prev - next)
    let low = 0;
    let high = sortedArray.length - 1;
    let mid;
    let element;

    while (low <= high) {
        // Logorithmic time, cuts search in half
        mid = Math.floor((low + high) / 2);
        element = sortedArray[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid -1;
        } else {
            return mid;
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 34, 56, 81, 20, 100, 99, 8, 7], 8));
```

#### Example - Big O(n^2)
```typescript
function addArray(inputArray: number[]): void {
    // Exponential time, two forloops
    // Not good for large inputs
    inputArray.forEach((item, _, array) => {
        let firstArrayItem = item;
        array.forEach((item) => {
            const result = firstArrayItem + item;
            console.log(result);
        });
    });
}

addArray([1,2,3,4,5,6,7,8,9]);
```

## Algorithms
When we speak of algorithms we are talking about how something works. The two main concepts of an algorithm are searching and sorting of a dataset.

#### Binary Search
A Binary Search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found.
 1. Average Time Complexity - O(log(n))
 2. [Source Code](./algorithm/BinarySearch.ts)
 ```sh
npm run binarysearch
 ```

#### Quick Sort
Quick Sort is a divide-and-conquer algorithm. It works by selecting a **pivot** element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
 1. Average Time Complexity - O(n log(n))
 2. [Source Code](./algorithm/QuickSort.ts)
 ```sh
npm run quicksort
 ```

#### Merge Sort 
 Merge sort is a divide-and-conquer algorithm. It takes two unsorted arrays and combines them into sorted one array. Merge Sort will compare the each element in both arrays and compare their values and add them to a single array inorder.
 Merge Sort has a time complexity of O(log n) because it divides the arrary into smaller units then compares each element with the adjacent array to compare and merge.

 1. Average Time Complexity - O(n log(n))
 2. [Source Code](./algorithm/MergeSort.ts)
 ```sh
npm run mergesort
 ```

#### Recursion
Recursion is where a function being defined is applied within its own definition. Basically the function calls itself until a base condition is met. A good example of recursion would be fibonacci sequence.

1. [Source Code](./algorithm/Recursion.ts)
```sh
npm run recusion
``` 



## Data Structures
Data structures describes how a dataset is organized or arranged. When using JavaScript or TypeScript for frontend development, most of the data will be arranged with a map, object, or an array. However, because JavaScript can be used for backend development with Node.js and Deno it is still a good to have a solid understanding of the best approaches to organize your data.

#### List
...

#### Linked List
...

#### Graphs
...

#### Queues
...

#### Stacks
...

#### Trees
...

#### Hash Maps
...

## Programming Challenges
To be a good programmer you have to be a good problem solver. Programming challenges help visualize and comprehend problems that differ from day-to-day development.

#### FizzBuzz
...

#### Harmless Ransom Note
...

#### Palindrome
...

#### Reverse Word Search
...


#### Two Sum
...

## Design Patterns

## Interview Questions
