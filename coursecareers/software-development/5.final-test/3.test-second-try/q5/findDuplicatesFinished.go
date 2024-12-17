package code

import "fmt"

// set T to comparable, so I can compare the elements in the slice
type Result[T comparable] struct {
	DuplicatedElements []T
	NumberOfDuplicates uint
}

func FindDuplicates[T comparable](elements []T) Result[T] {
	var result = Result[T]{}

	for idx1, item := range elements {

		for idx2, item2 := range elements {
			if idx1 == idx2 {
				// if we are checking the same item, continue the inner loop
				continue
			}

			if item == item2 {
				// if the items are a duplicate, set the alreadyIncluded state to false and loop throught the elements in the result
				alreadyIncluded := false

				for _, includedElement := range result.DuplicatedElements {
					if includedElement == item {
						// if the current item is already included in the result
						alreadyIncluded = true
					}
				}
				if alreadyIncluded == false {
					// if the item is not yet included in the result, add it and add 1 to the numberOfDuplicates
					result.DuplicatedElements = append(result.DuplicatedElements, item)
					result.NumberOfDuplicates++
				}
			}
		}
	}
	return result
}

func main() {
	var elements = []string{"a", "a", "b", "c", "a", "d", "e", "f", "f", "h"}
	fmt.Println(FindDuplicates(elements))
}
