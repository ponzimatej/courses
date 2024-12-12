package code

import "fmt"

// Node struct
type Node struct {
	Value int
	Left  *Node
	Right *Node
}

// BST struct which includes root node
type BST struct {
	Root *Node
}

// Insert a new value into the BST and return the BST
func InsertIntoBST(bst *BST, value int) *BST {
	var node = &Node{value, nil, nil}

	// if theres no root in the BST, create it
	if bst.Root == nil {
		bst.Root = node
		return bst
	}

	var current = bst.Root // set the current node to be the root node

	// loop through the bst
	for true {
		if value >= current.Value {
			// if the value is bigger than the current value, go to the right
			if current.Right != nil {
				// if there is a node on the right of the current value, set the current value to the right node and loop again
				current = current.Right
			} else {
				// if there is no node on the right, create it there
				current.Right = node
				break
			}
		} else {
			// if the value is smaller than the current value, go to the left
			if current.Left != nil {
				// if there is a node on the left of the current value, set the current value to the left node and loop again
				current = current.Left
			} else {
				// if there is no node on the left, create it there
				current.Left = node
				break
			}
		}
	}

	return bst // return the whole binary search tree
}

// helper function to see if the code works
func readBST(node Node) {

	if node.Left != nil {
		readBST(*node.Left)
	}
	fmt.Println(node)
	if node.Right != nil {
		readBST(*node.Right)
	}
}

func main() {
	bst := &BST{}
	InsertIntoBST(bst, 8)
	InsertIntoBST(bst, 9)
	InsertIntoBST(bst, 2)
	InsertIntoBST(bst, 4)
	InsertIntoBST(bst, 5)
	InsertIntoBST(bst, 10)
	readBST(*bst.Root)
}

// Honestly I didnt understand the excrecise definition, so I made a BST in the way I would do it.
// Hope that ok :)
