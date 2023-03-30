// Binary Search Tree

class Node {
  constructor( value ) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert( value ) {
    if ( this.root === null ) {
      this.root = new Node( value );
      return this;
    }
    let currentValue = this.root;
    while ( true ) {
      if ( value === currentValue.value ) return undefined;
      if ( value < currentValue.value ) {
        if ( currentValue.left === null ) {
          currentValue.left = new Node( value );
          return this;
        }
        currentValue = currentValue.left;
      } else {
        if ( currentValue.right === null ) {
          currentValue.right = new Node( value );
          return this;
        }
        currentValue = currentValue.right;
      }
    }
  }

  find( value ) {
    if ( this.root === null ) return false;
    let currentValue = this.root,
      found = false;
    while ( currentValue && !found ) {
      if ( value < currentValue.value ) {
        currentValue = currentValue.left;
      } else if ( value > currentValue.value ) {
        currentValue = currentValue.right;
      } else {
        found = true;
      }
    }
    if ( !found ) return undefined;
    return currentValue;
  }
}