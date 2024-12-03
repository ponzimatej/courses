package main

import "fmt"

type Store struct {
	Name      string
	Inventory map[string]int
}

type Transaction struct {
	ItemName string
	Quantity int
}

func main() {
	s := &Store{
		Name: "Local Store",
		Inventory: map[string]int{
			"Apples":  100,
			"Bananas": 50,
			"Oranges": 30,
		},
	}
	t := Transaction{
		ItemName: "Bananas",
		Quantity: -60,
	}

	fmt.Println(updateInventory(s, t))
	fmt.Println(s)
}

func updateInventory(store *Store, transaction Transaction) bool {

	if store.Inventory[transaction.ItemName]+transaction.Quantity < 0 {
		return false
	}

	store.Inventory[transaction.ItemName] += transaction.Quantity
	return true
}
