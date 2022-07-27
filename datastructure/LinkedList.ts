/**
 * - A Linked List is a data structure consisting of a collection of nodes which represents a sequence. 
 * - Each node contains data and a reference to the next node in the sequence.
 */

export class Node<K> {
    element: any;
    next: any

    constructor(element: K) {
        this.element = element;
        this.next = undefined;
    }

    toString() {
        return `${this.element}`;
    }
}

export default class LinkedList<T> {
    protected count = 0;
    protected head: Node<T> | undefined;

    constructor() {}

    /**
     * Adds a new element to the end of the list
     * @param element 
     */
    push(element: T) {
        const node = new Node(element);
        let current;

        if (this.head == null) {

            this.head = node;
        } else {
            current = this.head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
        }
        this.count++;
    }

    /**
     * Locate valid position in list to insert the node
     * @param index 
     * @returns 
     */
    getElementAt(index: number): Node<T> | undefined {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    /**
     * Add a node to the list at a desired index
     * @param element 
     * @param index 
     * @returns 
     */
    insert(element: T, index: number) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);

            if(index === 0) { // add a node to the start of the list
                const current = this.head; // reference first element in the list
                node.next = current; // set new node to point to current as next node
                this.head = node; // set new node as the first in the list
            } else { // add a node to the end or at a position of the list based on the index
                const previous:any = this.getElementAt(index -1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    /**
     * Remove and return an element at a giving position
     * @param index 
     * @returns element or undefined if not found
     */
    removeAt(index: number) {
        // check for out-of-bounds values
        if (index >= 0 && index < this.count) {
            let current: any = this.head;

            // removing the first item
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous: any = this.getElementAt(index -1);
                current = previous.next;
                // link previous with current's next skip
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    /**
     * Remove an element at a givin position
     * @param element 
     * @returns 
     */
    remove(element: T) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    /**
     * 
     * @param element  value of the element
     * @return position of the element
     */
    indexOf(element: T) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (element === current.element) {
                return i;
            }
            current = current.next;
        }

        return -1
    }

    /**
     * 
     * @returns true is the list is empty else false
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * 
     * @returns number of nodes in a list
     */
    size() {
        return this.count;
    }


    /**
     * @returns the head node in the list
     */
    getHead() {
        return this.head;
    }

    /**
     * clear the list
     */
    clear() {
        this.head = undefined;
        this.count = 0;
    }

    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}

const list = new LinkedList();
list.push(15);
list.push(10);
list.insert(14, 0);
console.log(list.toString())

