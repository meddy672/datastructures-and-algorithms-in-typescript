/**
 * - A Queue is a collection of items that follows the FIFO also know as the first come first served
 * - The addition of new elements is at the tail and the removal is from the front.
 * - The newest element added to the queue must wait at the end of the queue
 */

export default class Queue<T> {
    private count: number;
    private lowestCount: number;
    private items: any;

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }

    /**
     * Adds new element to the back of the queue
     * @param element 
     */
    enqueue(element: T) {
        this.items[this.count] = element;
        this.count++;
    }

    /**
     * Removes and returns the first element in the queue
     * @returns and removesthe first element in the queue
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
     * Return the first element in the queue
     * @returns 
     */
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount];
    }

    /**
     * 
     * @returns true isf queue has elements else false
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * clear the queue
     */
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    /**
     * Returns the first element in the queue
     * @returns 
     */
    size() {
        return this.count - this.lowestCount
    }

    /**
     * 
     * @returns the elements in the queue
     */
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString
    }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
console.log(queue.toString()) // 2,3,4,5
console.log(queue.peek()) // 2
console.log(queue.size()) // 4