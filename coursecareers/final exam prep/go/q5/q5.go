package main

import (
	"fmt"
	"sort"
)

type Contact struct {
	Name   string
	Email  string
	Age    int
	Groups []string
}

func main() {
	contacts := []Contact{}

	fmt.Println(sortContacts(contacts))
}

func sortContacts(contacts []Contact) []Contact {
	sort.Slice(contacts, func(i, j int) bool {
		return contacts[i].Name < contacts[j].Name
	})

	sort.Slice(contacts, func(i, j int) bool {
		return contacts[i].Age < contacts[j].Age
	})

	sort.Slice(contacts, func(i, j int) bool {
		return len(contacts[i].Groups) > len(contacts[j].Groups)
	})
	return contacts
}
