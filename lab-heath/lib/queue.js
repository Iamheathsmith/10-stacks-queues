'use strict';

const Node = require('./node.js');

module.exports = class {
  constructor(maxSize=1048) {
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