
# lab 15 - Stacks and Queues Data Structures

### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. once there, install NPM but typing in , `nmp install` and then you need to install the dev dependencies jest, superagent, dotenv, debug `npm install -D jest eslint`. 

# Stacks

### Stack Module
we have a constuctor that builds a stack object that has 3 methods attached to it. they are `push()`, `pop()`, `peek()`.

add the names say, the `push()` puts something on top of the stack.
the `pop()` removes the last item in the stack and the `peek()` just looks at the top item in the stack. The `push()` does take in a value for you to add to the stack also.

We do have a max size that is added to the stack and that is 1048. However it can be changed to what ever you need.


### Code for the Stack module
```javascript
module.exports = class {
  constructor(maxSize = 1048) {
    this.top = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  push(val) {
    if(this.size === this.maxSize) throw new Error('stack is too large');

    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    if(!this.top) throw new Error('nothing to remove');

    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;

    return temp;
  }

  peek() {
    if(!this.top) throw new Error('nothing in stack');
    return this.top;
  }
};
```


### testing 
to run the test type in the following in the terminal 
```javascirpt
npm test stack.test.js
```

### test block 1.
these test checks to see if the constructor is working

it #1 checks to see if something was made.
it #2 checks to see if the top is set to null.
it #3 checks to see if the stack is empty
it #4 checks to see what the max size is set to.


```javascript
describe('default properties', () => {
    it('should create a new instance of a Stack', () => {
      expect(this.stack).toBeInstanceOf(Stack);
    });
    it('should have a default val of null assigned to the top property', () => {
      expect(this.stack.top).toBeNull();
    });
    it('should have a default val of 0 assigned to the size property', () => {
      expect(this.stack.size).toEqual(0);
    });
    it('should have a maxSize property with a default val of 1048', () => {
      expect(this.stack.maxSize).toEqual(1048);
    });
  });
```

### test block 2.
these test checks to see if the `push()` is working

it #1 checks to see how many its was put in and done right.
it #2 checks to see what the value of the top item that was put in.
it #3 checks to see if an error is thrown if it goes over max size.

```javascript
  describe('pushing to stack', () => {
    it('stack should be the same as what was put into it.', () => {
      [...Array(66)].map((e,i) => this.stack.push(~~(Math.random() * i)));
      expect(this.stack.size).toEqual(66);
    });
    it('should add a new node to the top and have a value of 3', () => {
      this.stack.push(3);
      expect(this.stack.top.val).toEqual(3);
    });
    it('should throw an error when its over the max size', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      }).toThrow();
    });
  });
```

### test block 3.
these test checks to see if the `pop()` is working

it #1 checks the value of the item that was just put in.
it #2 checks to see if it throws an error if nothing to `pop()`
it #3 checks to see if the `pop()` leave the stack at the right amount.

```javascript
describe('removing from stack', () => {
    it('should remove the top node from stack', () => {
      this.stack.push(4);      
      expect(this.stack.pop().val).toEqual(4);
    });
    it('should throw an error if nothing to pop', () => {
      expect(() => this.stack.pop()).toThrow();
    });
    it('should remove the last node added', () => {
      this.stack.push(1);
      this.stack.push(2);
      this.stack.pop();
      expect(this.stack.size).toEqual(1);
    });
  });
```

### test block 4.
these test checks to see if the `peep()` is working

it #1 checks to see what the top value is.
it #2 checks to see if a error was thorwn if nothing to check.
it #3 checks to see what the value is if something was remove right before the peek.

```javascript
 describe('Peeking at the top', () => {
    it('should return the top of the stack', ()=> {
      this.stack.push(1);
      expect(this.stack.peek().val).toEqual(1);
    });
    it('should throw an error if nothing in stack', () => {
      expect(() => this.stack.peek()).toThrow();
    });
    it('should return the top of the stack after a pop()', ()=> {
      this.stack.push(2);
      this.stack.push(4);
      this.stack.push(6);
      this.stack.pop();
      expect(this.stack.peek().val).toEqual(4);
    });
  });
```

# Queue

### Queue Module
we have a constuctor that builds a stack object that has 2 methods attached to it. they are `enqueue()` and the  `dequeue()`.

add the names say, the `enqueue()` puts something in the front of the line in the queue.  the `dequeue()` removes and item from the queue. Last, the `enqueue()` has to take in a value also.

We do have a max size that is added to the queue and that is 1048. However it can be changed to what ever you need.


### Code for the Queue module
```javascript
module.exports = class {
  constructor(maxSize = 1048) {
    this.front = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  enqueue(val){
    if(this.size === this.maxSize) throw new Error('queue is full');

    let nd = new Node(val);
    if(!this.front) {
      this.front = nd;
      this.size++;
      return this;
    }
    for(var itr = this.front; itr.next; itr = itr.next);
    itr.next = nd;
    this.size++;
    return this;
  }

  dequeue(){
    if(!this.front) throw new Error('nothing to remove');
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    this.size --;
    return this.front;
  }
};
```


### testing 
to run the test type in the following in the terminal 
```javascirpt
npm test queue.test.js
```

### test block 1.
these test checks to see if the constructor is working.

it #1 checks to see if something was made.
it #2 checks to see if the top is set to null.
it #3 checks to see if the queue is empty
it #4 checks to see what the max size is set to.


```javascript
describe('default properties', () => {
    it('should create a new instance of a queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('should have a default val of null assigned to the top property', () => {
      expect(this.queue.front).toBeNull();
    });
    it('should have a default val of 0 assigned to the size property', () => {
      expect(this.queue.size).toEqual(0);
    });
    it('should have a maxSize property with a default val of 1048', () => {
      expect(this.queue.maxSize).toEqual(1048);
    });
  });
```

### test block 2.
these test are for the `enqueue()`

it #1 checks to see how many its was put in and done right.
it #2 checks to see what the value of the top item that was put in.
it #3 checks to see if an error is thrown if it goes over max size.

```javascript
describe('Enqueue: added a item the queue', () => {
    it('should have a size of 66', () => {
      [...Array(66)].map((e,i) => this.queue.enqueue(~~(Math.random() * i)));
      expect(this.queue.size).toEqual(66);
    });
    it('should add a new node to the front with a value of 4', () => {
      this.queue.enqueue(4);
      expect(this.queue.front.val).toEqual(4);
    });
    it('should throw an error when too many are added', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      }).toThrow();
    });
  });
```

### test block 3.
these test are for the `dequeue()`

it #1 checks the value of the item that was just put in.
it #2 checks to see if it throws an error if nothing to `dequeue()`
it #3 checks to see if the `dequeue()` leave the queue at the right amount.

```javascript
describe('Dequeu: removing an item from the queue', () => {
    it('should remove the last node from the queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      expect(this.queue.front.val).toEqual(1);
      expect(this.queue.dequeue().val).toEqual(2);
    });
    it('should throw an error if there is nothing to remove', () => {
      expect(() => {
        this.queue.dequeue();
      }).toThrow();
    });
    it('should lower the size of the queue', () => {
      this.queue.enqueue(2);
      this.queue.enqueue(4);
      this.queue.dequeue();
      expect(this.queue.size).toEqual(1);
    });
  });
```
