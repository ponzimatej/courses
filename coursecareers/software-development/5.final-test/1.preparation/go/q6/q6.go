package main

import "fmt"

type TreeNode struct {
	Value int
	Left  *TreeNode
	Right *TreeNode
}

var resultSlice = []int{}

func main() {
	root := &TreeNode{
		Value: 100,
		Left: &TreeNode{
			Value: 50,
			Left: &TreeNode{
				Value: 25,
				Left: &TreeNode{
					Value: 10},
				Right: &TreeNode{
					Value: 30,
				},
			},
			Right: &TreeNode{
				Value: 75,
				Left: &TreeNode{
					Value: 60,
				},
				Right: &TreeNode{
					Value: 80,
				},
			},
		},
		Right: &TreeNode{
			Value: 150,
			Left: &TreeNode{
				Value: 125,
				Left: &TreeNode{
					Value: 110,
				},
				Right: &TreeNode{
					Value: 130,
				},
			},
			Right: &TreeNode{
				Value: 175,
				Left: &TreeNode{
					Value: 160,
				},
				Right: &TreeNode{
					Value: 190,
				},
			},
		},
	}
	min := 60
	max := 150

	fmt.Println(flattenBST(root, min, max))
}

func checkNode(node *TreeNode, min int, max int) {

}

func flattenBST(node *TreeNode, min int, max int) []int {
	if node.Left != nil {
		flattenBST(node.Left, min, max)
	}

	if node.Value >= min && node.Value <= max {
		resultSlice = append(resultSlice, node.Value)
	}

	if node.Right != nil {
		flattenBST(node.Right, min, max)
	}

	return resultSlice
}
