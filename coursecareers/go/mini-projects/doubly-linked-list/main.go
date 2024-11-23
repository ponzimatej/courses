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
	for i := 0; i < int(ll.length); i++ {
		if uint(i) == idx {
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
		ll.length += 1
		return
	}

	if ll.length == 1 {
		node.prev = ll.head
		node.next = ll.head
		ll.head.next = node
		ll.head.prev = node
	} else {
		node.prev = ll.head.prev
		node.next = ll.head
		ll.head.prev.next = node
		ll.head.prev = node
	}

	ll.length += 1
}

func (ll *LinkedList[T]) pop() T {
	poppedNode := ll.head.prev
	newNode := poppedNode.prev
	newNode.next = ll.head
	ll.head.prev = newNode
	ll.length -= 1

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
	ll := &LinkedList[int]{head: nil, length: 0}
	ll.append(3)
	ll.append(4)
	ll.append(5)
	ll.append(7)
	ll.pop()
	ll.append(15)
	ll.printList()
	val, yes := ll.index(2)
	fmt.Println(val, yes)
}
