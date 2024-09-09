export class Stack {
  top: number;
  items = {};

  constructor () {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value: string | number) {
    this.top++;
    this.items[this.top] = value;
  }

  pop() {
    
  }
}