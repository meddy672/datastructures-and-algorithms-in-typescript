class List {
    data: any[];
    size: number;

    constructor() {
        this.data = [];
        this.size = 0;
    }

    push(value: any) {
        this.data[this.size] = value;
        this.size++;
    }

    remove(index: number): any {
        if (this.size === 0) {
            return null;
        }

        const removed = this.data[index];

        this.data = this.data.filter((item) => item !== removed);

        // for (let i = index; i < this.size - 1; i++) {
        //     this.data[index] = this.data[index + 1];
        // }

        // this.data[this.size - 1] = null;

        // this.size--;

        return removed;
    }

    /**
     * @deprecated - JavaScript array size is increased automatically
     */
    grow() {
        const array = new Array(this.data.length * 2)

        for (let index = 0; index < this.data.length; index++) {
            array[index] = this.data[index];
        }
        console.log('growing from', this.data.length, 'to', array.length);

        this.data = array;
    }

    toString(): string {
        if (this.size === 0) {
            return "[]";
        } else {
            return `[ ${this.data.toString()} ]`
        }
    }
}
const list = new List();

list.push(10);
list.push(13);
list.push(100);
list.push(30);
list.remove(2);
console.log(list.toString())