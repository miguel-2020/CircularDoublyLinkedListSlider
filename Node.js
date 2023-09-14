/**
  Represents a node in the linkList
  @class Node
  @throws {TypeError} if input is not valid.
*/
class Node {
    value;
    prev;
    next;
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  
    get value() {
      return this.value;
    }
    get next() {
      return this.next;
    }
  
    get prev() {
      return this.prev;
    }
  }