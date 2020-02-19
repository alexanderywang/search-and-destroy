"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let arrayHasBeenSeen = [];

  // console.log("head", linkedlist.head, "TAIL", linkedlist.tail);
  while (linkedlist.head) {
    if (arrayHasBeenSeen.includes(linkedlist.head)) return true;
    else {
      arrayHasBeenSeen.push(linkedlist.head);
      linkedlist.head = linkedlist.head.next;
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
