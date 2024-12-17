package code

import "fmt"

func main() {
	var arr = []int{-1531, -2, -6, -124, -63, -12}
	fmt.Println(MaxSubarraySum(arr))
}

func MaxSubarraySum(arr []int) int {
	if len(arr) == 0 {
		// if the input is empty, return 0
		return 0
	}

	// max stores the maximal sum, currentMax stores the maximal sum including the current number
	max := arr[0]
	currentMax := arr[0]

	for _, currentNumber := range arr {

		if currentNumber+currentMax > currentNumber {
			// if adding curentMax to currentNumber makes the sum bigger than currentNumber itself, add it
			currentMax += currentNumber
		} else {
			// else use the currentNumber as currentMax
			currentMax = currentNumber
		}

		if currentMax > max {
			max = currentMax
		}

	}
	return max
}
