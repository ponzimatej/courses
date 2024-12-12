package code

func main() {
	var arr = []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
	MaxSubarraySum(arr)
}

func MaxSubarraySum(arr []int) int {
	var max int        // this is the max that I will return
	var currentMax int // this is the max sum including the current number

	for _, number := range arr {
		// loop through all of the numbers
		if currentMax+number > number {
			// if adding the number to the currentMax is bigger than the number itself,
			currentMax = currentMax + number // add the number to the currentMax
		} else {
			// if it is not bigger than the number itself
			currentMax = number // set currentMax to just the current number
		}
		if currentMax > max {
			// if our currentMax is bigger than the global max, set the global max to currentMax
			max = currentMax
		}
	}
	return max
}
