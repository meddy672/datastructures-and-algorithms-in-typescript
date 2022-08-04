# Data Structures, Algorithms, and Program Challenges In Typescript
This repository serves up some common examples on how to implement some basic data structures, algorithms, and solve programming challenges using Typescript. It's a great place to start if you need to prepare for a software developer interview and need to see some code examples. 

## Table Of Contents
1. [Big O Notation](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#big-o-notation)
    1. [Constant Time](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#example---big-o1)
    2. [Linear Time](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#example---big-on)
    3. [Logorithmic Time](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#example---big-ologn)
    4. [Exponential Time](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#example---big-on2)
2. [Algorithms](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#algorithms)
    1. [Binary Search](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#binary-search)
    2. [Quick Sort](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#quick-sort)
    3. [Merge Sort](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#merge-sort)
    4. [Recursion](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#recursion)
3. [Data Structures](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#data-structures)
    1. [List](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#list)
    2. [Linked List](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#linked-list)
    3. [Graphs](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#graphs)
    4. [Queue](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#queues)
    5. [Stacks](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#stacks)
    6. [Trees](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#trees)
4. [Prgramming Challenges](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#programming-challenges)
    1. [FizzBuzz](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#fizzbuzz)
    2. [Harmless Ransom Note](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#harmless-ransom-note)
    3. [Palindrome](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#palindrome)
    4. [Reverse Word Search](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#reverse-word-search)
    5. [Two Sum](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#two-sum)
5. [Design Patterns](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#two-sum)
6. [Interview Questions](https://github.com/meddy672/datastructures-and-algorithms-in-typescript#interview-questions)


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
List are an abstract data type that represents a finite number of ordered values, where the same value may occur more than once. The List I have implemented here are not true list because arrays in JavaScript increase in size automatically.
[Source Code](./datastructure/List.ts)
```sh
npm run list
```

#### Linked List
A Linked List is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.
[Source Code](./datastructure/LinkedList.ts)
```sh
npm run linkedlist
```
#### Graphs
...

#### Queues
A Queue is a collection of items that follows the FIFO also know as the first come first served. The addition of new elements is at the tail and the removal is from the front.
[Source Code](./datastructure/Queue.ts)
```sh
npm run queue
```

#### Stacks
A Stack is an ordered collection of items that follows the last in, first out principle. The addition of a new items or removal of existing items takes place at the end. The end of the stack is know as the top and the opposite is know as the base. The newest elements are near the top, and the oldest elements are near the base.
[Source Code](./datastructure/Stack.ts)
```sh
npm run stack
```

#### Trees
A Tree is a data structure that has a set of connected nodes. Each node in the tree can be connected to many children (depending on the type of tree), but must be connected to exactly one parent, except for the root node, which has no parent. [Source Code](./datastructure/Tree.ts)
```sh
npm run tree
```


## Programming Challenges
To be a good programmer you have to be a good problem solver. Programming challenges help visualize and comprehend problems that differ from day-to-day development.

#### FizzBuzz
FizzBuzz is a challenge that just about every developer will encounter once in their career. FizzBuzz is a function that checks if a number is divisible by a specified divisor(s) and if so output the apporiate message. If not then the number should be outputted instead. [Source Code](./challenges/Fizzbuzz.ts)
```sh
npm run fizzbuzz
```

#### Harmless Ransom Note
The Harmless Ransom Note searches a text blob and sees if  the characters in the text blob are able to mkae up the note. If a string appears more than once in the note then it should appear more than once in the text blob. [Source Code](./challenges/HarmlessRansomNote.ts)
```sh
npm run harmlessransomnote
```

#### Palindrome
A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar. [Source Code](./challenges/Palindrome.ts)

#### Reverse Word Search
Reverse word takes a string and reverses it's characters. [Source Code](./challenges/ReverseWordSearch.ts)
```sh
npm run reverseword
```


#### Two Sum
The Two Sum function searches an array and locates each number pair that sum up to the sum parameter. If the function finds a pair that equates to the sum it is added to an array and returned as a pair. [Source Code](./challenges/TwoSum.ts)
```sh
npm run twosum
```

## Design Patterns

## Interview Questions
