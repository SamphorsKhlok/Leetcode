// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

module.exports = {
    ListNode,
    addTwoNumbers
}
// function SingleLinkedList(){
//     this.head = new ListNode(null);
//
//     function add(value){
//         let currentNode = this.head;
//         let node = new ListNode(value);
//
//         if(!currentNode){
//             this.head = node;
//         }else{
//             while(currentNode.next){
//                 currentNode = currentNode.next;
//             }
//
//             currentNode.next = node;
//         }
//     }
//
//     function print(){
//         let currentNode = this.head;
//         while(currentNode){
//             console.log(currentNode.val);
//             currentNode = currentNode.next;
//         }
//     }
//
//     return {
//         add: add,
//         print : print
//     }
// }

function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.add = function(value){
    let currentNode = this;
    let node = new ListNode(value);

    if(currentNode.val == null){
            this.val = node.val;
    }else{
        while(currentNode.next){
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }
}

ListNode.prototype.print = function (){
    let currentNode = this;
    let temp = [];
    while(currentNode){
        ///console.log(currentNode.val);
        temp.push(currentNode.val);
        currentNode = currentNode.next;
    }
    //console.log("------");
    //console.log(temp);
    return temp;
}


// let l1 = new ListNode(5);
// l1.add(4);
// l1.add(3);
//
// l1.print();
//
// let l2 = new ListNode(5);
//l2.add(6);
//l2.add(4);

//l2.print();

function addTwoNumbers (l1, l2) {
    let l3 = new ListNode(null);
    let keeper = 0;
    while(l1 && l2 ){
        let temp = l1.val + l2.val + keeper;

        if(temp >= 10){
            keeper = Math.floor(temp/10);
            l3.add(temp%10);
        }else{
            keeper = 0;
            l3.add(temp);
        }

        l1 = l1.next;
        l2 = l2.next;
    }

    while(l1){
        let temp = l1.val + keeper;

        if(temp >= 10){
            keeper = Math.floor(temp/10);
            l3.add(temp%10);
        }else{
            keeper = 0;
            l3.add(temp);
        }

        l1 = l1.next;
    }

    while(l2){
        let temp = l2.val + keeper;

        if(temp >= 10){
            keeper = Math.floor(temp/10);
            l3.add(temp%10);
        }else{
            keeper = 0;
            l3.add(temp);
        }

        l2 = l2.next;
    }

    if(keeper > 0){
        l3.add(keeper);
    }

    return l3.print();
};

//let l3 = addTwoNumbers(l1,l2);
//console.log(l3);
