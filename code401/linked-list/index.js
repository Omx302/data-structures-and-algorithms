"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;

    return;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let nodeString = "";
    let current = this.head;
    while (current) {
      nodeString += `{${current.value}} -> `;
      current = current.next;

      if (current == null) {
        nodeString += `NULL`;
      }
    }
    return nodeString;
  }
}

let myList = new LinkedList();

myList.insert("Jack");
myList.insert("Albert");
myList.insert("John");

console.log(myList);
console.log(`includes("John") =>`, myList.includes("John"));
console.log(`includes("Alfred") =>`, myList.includes("Alfred"));

console.log(myList.toString());

module.exports = LinkedList;
