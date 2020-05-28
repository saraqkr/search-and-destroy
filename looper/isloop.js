'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  console.log("LINKEDLIST", linkedlist)
  if(linkedlist.head === null) return false;
  const firstNode = linkedlist.getNthNode(1)
  if(firstNode.next === null) return false;
  let n = 1;
  if(firstNode.next) {
    n++
    const nthNode = linkedlist.getNthNode(n)
    if (!nthNode.next) {
      return false;
    } else {

    }
  }
};
//linkedlist.head === linkedlist.head.next
//if Linkedlist.head === null || node's next == null => return false;
//if two node's next val === the same node, there is a loop
//

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
