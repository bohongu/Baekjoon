const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = +fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

// push, shift를 사용하면 시간복잡도가 너무 커져 삽입삭제가 빈번한 경우 LinkedList를 사용해야한다.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // 값 넣기
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return newNode;
  }

  getHead() {
    // 첫 노드(head) 가져오기
    return this.head.value;
  }

  removeHead() {
    // 첫 노드(head) 지우기
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getLength() {
    // 연결리스트 길이
    return this.length;
  }
}

const cards = new LinkedList();

for (let i = 1; i <= input; i++) {
  cards.push(i);
}

while (cards.getLength() !== 1) {
  cards.removeHead();
  cards.push(cards.getHead());
  cards.removeHead();
}

console.log(cards.getHead());
