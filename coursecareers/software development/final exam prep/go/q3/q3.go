package main

import "fmt"

type Book struct {
	Title  string
	Author string
	Sales  int
}

func main() {
	books := []Book{}
	fmt.Println(topAuthors(books))
}

func topAuthors(books []Book) map[string]int {
	var resultMap = map[string]int{}
	var returnMap = map[string]int{}
	for _, book := range books {
		resultMap[book.Author] += book.Sales
	}

	for key, value := range resultMap {
		if value >= 10000 {
			returnMap[key] = value
		}
	}

	return returnMap
}
