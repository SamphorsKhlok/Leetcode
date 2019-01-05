// Given a linked list, determine if it has a cycle in it.
//   Follow up:
//   Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let backtrack = [];
var hasCycle = function(head) {
  if(head == null || head.next == null) return false;

  let node = head;
  while(node.next){
    if(exist(node)){
      return true
    }

    backtrack.push(node);
    node = node.next;
  }

  return false;

};

function exist (node) {
  for(let i of backtrack){
    if(i.val == node.val){
      return true;
    }
  }

  return false;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
};

module.exports = {hasCycle};

