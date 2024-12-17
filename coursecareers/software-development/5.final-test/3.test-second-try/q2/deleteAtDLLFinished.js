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
      // if removing the head and the list is longer, make a newHead, link it correctly, set it as head
      let newHead = this.head.next;
      newHead.prev = this.head.prev;
      this.head.prev.next = newHead;
      this.head = newHead;
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
      if (idx === index) {
        // if we are at the index we want to delete, re-link the list correctly, delete the node and stop
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current = null;
        break;
      }

      // set current to the next node and add 1 to idx
      current = current.next;
      idx++;

      if (current === this.head) {
        // if we are back at the start, return
        console.log("index doesnt exist");
        return;
      }
    }
  }

  // helper function to print my list
  printDLL() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }

    let current = this.head;
    if (current.next && current.prev) {
      console.log(
        `head = ${current.value}, tail = ${current.prev.value}, tail next = ${current.prev.next.value}`
      );
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
