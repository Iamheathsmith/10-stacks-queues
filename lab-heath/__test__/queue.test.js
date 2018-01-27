'use strict';

const Queue = require('../lib/queue');

describe('queue data structure module', function() {
  beforeEach(() => this.queue = new Queue());
  
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
});