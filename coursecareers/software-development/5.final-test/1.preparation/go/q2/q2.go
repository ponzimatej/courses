package main

import (
	"fmt"
	"math"
)

func main() {

	var slice = []int{-3, -2, -1, -4, -5}
	fmt.Println(oddSumMaxPair(slice))

}

func oddSumMaxPair(numbers []int) []int {
	var maxSum = int(math.Inf(-1))
	var twoIntsArr = []int{}

	for i, number1 := range numbers {
		for u, number2 := range numbers {
			if i == u || number1%2 == 0 && number2%2 == 0 || number1%2 != 0 && number2%2 != 0 {
				// if im checking the same number, both numbers are odd or both numbers are even, break
				continue
			}

			if number1+number2 > maxSum {
				// if the sum of these numbers is bigger than max sum, set maxSum to be their sum
				maxSum = number1 + number2
				twoIntsArr = append([]int{}, number1)
				twoIntsArr = append(twoIntsArr, number2)
			}
		}
	}

	return twoIntsArr
}
