package main

import (
	"fmt"
	"math"
)

func main() {

	var slice []int = []int{15, 61, 25, 37, 52, 10, 47, 32, 73, 41, 88, 12, 64, 56, 29, 83, 98, 70}
	fmt.Println(largestIntegers(slice))

}

func largestIntegers(numbers []int) [2]int {
	var returnArr = [2]int{int(-math.Inf(-1)), int(-math.Inf(-1))}

	for _, number := range numbers {
		if number > returnArr[0] {
			returnArr[0] = number
		}
	}

	for i := range numbers {
		if numbers[i] == returnArr[0] {
			numbers = append(numbers[:i], numbers[i+1:]...)
			break
		}
	}

	for _, number := range numbers {
		if number > returnArr[1] {
			returnArr[1] = number
		}
	}

	return returnArr
}
