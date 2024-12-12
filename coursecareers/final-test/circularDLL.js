class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class CircularDoublyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  deleteAt(index) {
    if (index === 0 && !this.head.next) {
      // if removing the head and the list is only the head
      this.head = null;
      return;
    }

    if (index === 0 && this.head.next) {
      // if removing the head and the list is longer than 1
      let newHead = this.head.next; // make a newHead
      newHead.prev = this.head.prev; // link the newHead to the endNode
      this.head.prev.next = newHead; // link the endNode to the newHead
      this.head = newHead; // set the lists' head to newHead
      return;
    }

    if (!this.head.next) {
      // if the list is only the head and we are not removing the head
      console.log("index doenst exist");
      return;
    }

    // if not removing the head
    let idx = 0;
    let current = this.head;

    while (true) {
      // while looping through the list
      if (idx === index) {
        // if we are at the index we want to delete
        current.prev.next = current.next; // set the (node at idx-1)'s next node to (node at idx+1)
        current.next.prev = current.prev; // set the (node at idx+1)'s previous node to (node at idx-1)
        current = null; //remove the current node
        break; // stop the loop after removing the node
      }

      current = current.next; // if we arent at the index, set the current to be the next node
      idx++; // add 1 to idx

      if (current === this.head) {
        // if we are back at the start, return
        console.log("index doesnt exist");
        return;
      }
    }
  }

  // helper function to see if my code works
  printDLL() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }

    console.log();
    let current = this.head;
    if (current.next && current.prev) {
      console.log(`head = ${current.value}`);
      console.log(`tail = ${current.prev.value}`);
      console.log(`tail's next = ${current.prev.next.value}`);
    }

    while (true) {
      console.log(current.value);
      if (!current.next) return;
      current = current.next;

      if (current === this.head) {
        return;
      }
    }
  }
}

let head = new Node(1);
let node1 = new Node(2, null, head);
let node2 = new Node(3, null, node1);
let node3 = new Node(4, null, node2);

head.next = node1;
head.prev = node3;
node1.next = node2;
node2.next = node3;
node3.next = head;

let dll = new CircularDoublyLinkedList(head);
dll.printDLL();
dll.deleteAt(0);
dll.printDLL();

module.exports = { Node, CircularDoublyLinkedList };
