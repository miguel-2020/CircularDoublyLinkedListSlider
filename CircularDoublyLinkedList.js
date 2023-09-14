/**
    Represents a circular Doubly LinkedList.
    @class Slider
    @throws {TypeError} if input is not an instance of a Node.
  */
    class CircularDoublyLinkedList {
        head;
        tail;
        size;
        constructor() {
          this.head = null;
          this.tail = null;
          this.size = 0;
        }
      
        get head() {
          return this.head;
        }
      
        get tail() {
          return this.tail;
        }
      
        add(value) {
          const newNode = new Node(value);
      
          if (Object.is(this.head, null)) {
            this.head = newNode;
            this.size += 1;
          } else if (Object.is(this.head.next, null)) {
            this.head.next = newNode;
            this.head.prev = newNode;
      
            newNode.prev = this.head;
            newNode.next = this.head;
            this.size += 1;
          } else {
            const temp = this.head.next;
            this.head.next = newNode;
            newNode.prev = this.head;
            newNode.next = temp;
            temp.prev = newNode;
            this.size += 1;
          }
        }
      
        search(value) {
          let temp = this.head;
          let counter = 0;
          while (counter <= this.size - 1) {
            if (value === temp.value) {
              return temp;
            }
      
            temp = temp.next;
            counter += 1;
          }
      
          return null;
        }
      
        get getSize() {
          return this.size;
        }
      
        static validate(node) {
          if (!(node instanceof Node)) {
            throw new Error(
              `${node.toString()} is not of the expected type.You must provide an instance of a Node.`
            );
          }
        }
      }