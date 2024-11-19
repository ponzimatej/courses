package main

import "fmt"

type Shape interface {
	getPerimeter() uint
}

type Triangle struct {
	a uint
	b uint
	c uint
}

type Square struct {
	width uint
}

func (t Triangle) getPerimeter() uint {
	return t.a + t.b + t.c
}

func (s Square) getPerimeter() uint {
	return s.width * 4
}

func isEvenPerimeter(shape Shape) bool {
	return shape.getPerimeter()%2 == 0
}

func main() {
	var shapes []Shape = []Shape{Triangle{1, 2, 3}, Square{10}, Triangle{6, 5, 2}}
	perimeters := uint(0)

	for _, shape := range shapes {
		perimeters += shape.getPerimeter()
	}

	fmt.Println(perimeters)
}
