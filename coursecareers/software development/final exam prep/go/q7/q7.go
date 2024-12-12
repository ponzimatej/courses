package main

import "fmt"

type Set[T comparable] struct {
	elements map[T]struct{}
}

func NewSet[T comparable]() *Set[T] {
	return &Set[T]{elements: make(map[T]struct{})}
}

func (set *Set[T]) Add(item T) {
	set.elements[item] = struct{}{}
}

func (set *Set[T]) Remove(item T) {
	delete(set.elements, item)
}

func (set *Set[T]) Contains(item T) bool {
	for key := range set.elements {
		if key == item {
			return true
		}
	}

	return false
}

func (set *Set[T]) Size() int {
	return len(set.elements)
}

func main() {
	s := NewSet[int]()
	s.Remove(6)
	s.Add(1)
	s.Add(2)
	s.Add(3)
	s.Add(3)
	s.Remove(2)
	fmt.Println(s.Contains(1)) // true
	fmt.Println(s.Contains(5)) // false
	s.Add(5)
	fmt.Println(s.Contains(5)) // true
	fmt.Println(s.Contains(2)) // false
	fmt.Println(s.Size())      // 3
}
