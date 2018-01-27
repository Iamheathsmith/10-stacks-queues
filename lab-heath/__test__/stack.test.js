'use strict';

const Stack = require('../lib/stack');
require('jest');



describe('test for the stack module', function() {
  beforeEach(() => this.stack = new Stack());

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
});