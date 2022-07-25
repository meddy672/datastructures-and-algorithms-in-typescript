/**
 * - A Stack is an ordered collection of items that follows the last in, first out principle.
 * - The addition of a new items or removal of existing items takes place at the same end.
 * - The end of the stack is know as the top and the top and the opposite is know as the base.
 * - The newest elements are near the top, and the oldest elements are near the base
 * 
 */

export default class Stack<T> {
    private count: number;
    private items: any;

    constructor() {
        this.count = 0;
        this.items = {};
    }

    /**
     *  Inserts an item to the top of the stack and increases the stack count.
     * @param element - item to be inserted to the top of the stack
     */
    push(element: T) {
        this.items[this.count] = element;
        this.count++
    }

    /**
     * Check to see the stack is empty if not removes and returns the top most item
     * @returns the top most item the stack
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    /**
     * Returns the top most item in the stack
     */
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1]
    }

    /**
     * If the stack has items returns true else false
     * @returns Boolean
     */
    isEmpty() {
        return this.count === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        } 
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

const stack = new Stack<number>();

stack.push(5);
stack.push(8);
stack.push(11);
stack.push(15);
console.log(stack.toString());// 5, 8, 11, 15
stack.pop(); // removes 15
console.log(stack.peek()); // 11
console.log(stack.toString());// 5, 8, 11