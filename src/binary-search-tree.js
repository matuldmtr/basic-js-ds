const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const addData = (node, data) => {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    };

    this.rootNode = addData(this.rootNode, data);
  }

  has(data) {
    const ifHasData = (node, data) => {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return ifHasData(node.left, data);
      } else {
        return ifHasData(node.right, data);
      }
    };

    return ifHasData(this.rootNode, data);
  }

  find(data) {
    const findData = (node, data) => {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    };

    return findData(this.rootNode, data);
  }

  remove(data) {
    const removeData = (node, data) => {
      if (!node) {
        // console.log(`data_0: ${data}`);
        // console.log(`node_0: ${node.data}`);
        return null;
      }

      if (data < node.data) {
        console.log(`data_1: ${data}`);
        console.log(`node_1: ${node.data}`);

        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
      } else {
        if (!node.left && !node.right) {
          return null;
        }
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let rightNodeMin = node.right;
      while (rightNodeMin.left) {
        rightNodeMin = rightNodeMin.left;
      }

      node.data = rightNodeMin.data;
      node.right = removeData(node.right, rightNodeMin.data);

      return node;
    };

    this.rootNode = removeData(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) return;

    let node = this.rootNode;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) return;

    let node = this.rootNode;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
