/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as:
    class Node {
        int data;
        Node next;
    }
*/

boolean hasCycle(Node head) {
    if(head == null || head.next == null) return false;

    Node current = head;
    HashMap<Node, Integer> hm = new HashMap<>();

    while(current.next != null){
        if(!hm.containsKey(current)){
            hm.put(current, current.data);
            current = current.next;
        }else{
            return true;
        }
    }

    return false;
}

sorry there is no testing file, since it is written in java.
