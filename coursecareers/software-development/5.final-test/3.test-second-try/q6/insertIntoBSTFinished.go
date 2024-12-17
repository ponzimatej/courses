package code

import "fmt"

func main() {
	root := &BST{}
	InsertIntoBST(root, 4)
	InsertIntoBST(root, 7)
	InsertIntoBST(root, 2)
	InsertIntoBST(root, 3)
	InsertIntoBST(root, 1)
	InsertIntoBST(root, 11)
	readBST(root)
}

type BST struct {
	Value int
	Left  *BST
	Right *BST
}

func InsertIntoBST(root *BST, value int) *BST {

	// if root is nil
	if root == nil {
		return &BST{value, nil, nil}
	}

	// if BST is empty
	if *root == (BST{}) {
		root.Value = value
		root.Left = nil
		root.Right = nil
		return root
	}

	node := &BST{value, nil, nil}
	var current = root

	for true {
		// loop through the BST

		if node.Value >= current.Value {

			// check if there is a node on the right, if there is, set it to current, else add our node there and break
			if current.Right != nil {
				current = current.Right
			} else {
				current.Right = node
				break
			}
		}

		if node.Value < current.Value {

			// check if there is a node on the left, if there is, set it to current, else add our node there and break
			if current.Left != nil {
				current = current.Left
			} else {
				current.Left = node
				break
			}
		}

	}

	return root
}

// helper function to see if my code works
func readBST(node *BST) {

	if node.Left != nil {
		readBST(node.Left)
	}
	if node.Right != nil {
		readBST(node.Right)
	}
	fmt.Println(node)
}
