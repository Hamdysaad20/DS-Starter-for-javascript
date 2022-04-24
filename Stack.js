class Stack {
    constructor() {
      //in. array
        this.items = []
      // set a counter to zero; we have a counter cuz the stack in array (in java for ex:) has a limited size .
        this.count = 0
    }

    // Add element to top of stack
    push(element) {
      //put the element in the  given position in items array; the position is according to the counter .
        this.items[this.count] = element
      // for chicking & Error chicker
        console.log(`${element} added to ${this.count}`)
      // since  you added an element, then increment the counter .  
      this.count += 1
      // return the position; the possition is always smaller than the actual elements numbers cuz we start positioning in zero .(remember)
        return this.count - 1
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)

stack.peek()

stack.push(300)

console.log(stack.print())

stack.pop()
stack.pop()

stack.clear()

console.log(stack.print())

stack.size()

stack.isEmpty()
