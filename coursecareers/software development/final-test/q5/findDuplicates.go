package code

// I needed to set T to comparable, else I couldnt compare the elements in the slice,
// which would result in me not being able to find duplicates.
type Result[T comparable] struct {
	DuplicatedElements []T
	NumberOfDuplicates uint
}

func FindDuplicates[T comparable](elements []T) Result[T] {
	var result = Result[T]{}
	for idx1, item := range elements {
		for idx2, item2 := range elements {
			if idx1 == idx2 {
				// if we are checking items at the same index, skip to another item
				continue
			}

			if item == item2 {
				// if the items are a duplicate
				included := false // set a state to see if the item is already included in the result
				for _, elemenent := range result.DuplicatedElements {
					// loop through the elements in the result
					if elemenent == item {
						// if the current item is already in the result, set included to true
						included = true
					}
				}
				if included == false {
					// if the item is not yet included in the result
					result.DuplicatedElements = append(result.DuplicatedElements, item) // add the item
					result.NumberOfDuplicates++                                         // add 1 to the numberOfDuplicates
				}
			}
		}
	}
	return result
}

func main() {
	var elements = []int{4, 4, 5, 5, 5, 9, 10, 10, 9}
	FindDuplicates(elements)
}

// in the excercise there is a statement: "a slice containing the unique duplicated elements,
// in the order in which they were found."
// I honestly don't understand the statement. In my case they are found in a different order than
// in the definition. But they are still added in the order in which they were found.
