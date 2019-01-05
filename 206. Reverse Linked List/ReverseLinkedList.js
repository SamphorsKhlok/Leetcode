
//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

  //recursively
  let stack = [];
  if(head == null) return stack;

  let current = head;

  while(current != null){
    stack.push(current);
    current = current.next;
  }

  let newHead = new ListNode(0);
  let currentHead = newHead;
  while(stack.length){
    currentHead = stack.pop();
    currentHead = currentHead.next;
  }

  return newHead.next;
};
