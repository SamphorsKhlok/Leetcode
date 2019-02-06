/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let list;
var levelOrder = function(root) {
  list = [];
  traverse(root, 0);
  return list;
};

var traverse = function(node, level){
  if(node == null) return;
  if(list[level] == null){
    list[level] = [];
  }

  list[level].push(node.val);

  traverse(node.left,level+1);
  traverse(node.right,level+1);
}
