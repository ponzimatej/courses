package main

import "fmt"

type Node[T any] struct {
	next  *Node[T]
	prev  *Node[T]
	value T
}

type LinkedList[T any] struct {
	head   *Node[T]
	length uint
}

func (ll *LinkedList[T]) index(idx uint) (T, bool) {
	// return value and "ok", indicating if index is valid
	if ll.head == nil {
		var notFound T
		return notFound, false
	}

	current := ll.head
	for i := uint(0); i < ll.length; i++ {
		if i == idx {
			return current.value, true
		}
		current = current.next
	}

	var notFound T
	return notFound, false
}

func (ll *LinkedList[T]) append(value T) {
	node := &Node[T]{next: nil, prev: nil, value: value}

	if ll.head == nil {
		ll.head = node
		node.next = node
		node.prev = node
	} else {
		node.prev = ll.head.prev
		node.next = ll.head
		ll.head.prev.next = node
		ll.head.prev = node
	}

	ll.length++
}

func (ll *LinkedList[T]) pop() T {
	if ll.head == nil {
		var defaultVal T
		return defaultVal
	}

	if ll.head.next == ll.head {
		poppedNode := ll.head
		ll.head = nil
		ll.length = 0
		return poppedNode.value
	}

	poppedNode := ll.head.prev
	newNode := poppedNode.prev
	newNode.next = ll.head
	ll.head.prev = newNode
	ll.length--

	return poppedNode.value
}

func (ll *LinkedList[T]) printList() {
	current := ll.head

	for i := 0; i < int(ll.length); i++ {
		fmt.Printf("%v: %v\n", i, current.value)
		current = current.next
	}
}

func main() {
	ll := LinkedList[int]{}
	ll.printList()
	ll.pop()
	ll.append(10)
	ll.append(15)
	ll.pop()
	ll.pop()
	ll.append(4)
	ll.append(9)

	ll.printList()
	fmt.Println(ll.index(1))
}
