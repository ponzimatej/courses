package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"strings"
)

type Card struct {
	value int
	suit  int // 0 - spades, 1 - hearts, 2 - diamonds, 3 - clubs
}

func (card Card) getString() string {
	var suit string
	var value string

	switch card.suit {
	case 0:
		suit = "♠"
	case 1:
		suit = "♥"
	case 2:
		suit = "♦"
	case 3:
		suit = "♣"
	}

	switch card.value {
	case 11:
		value = "J"
	case 12:
		value = "Q"
	case 13:
		value = "K"
	case 1:
		value = "A"
	default:
		value = fmt.Sprintf("%d", card.value)
	}

	return value + suit
}

type Deck struct {
	cards []Card
}

func (deck *Deck) draw(num uint) []Card {
	toReturn := []Card{}
	for i := uint(0); i < num; i++ {
		lastCard := deck.cards[len(deck.cards)-1] // get the last card in the deck
		deck.cards = deck.cards[:len(deck.cards)-1]
		toReturn = append(toReturn, lastCard)
	}

	return toReturn
}

func (d *Deck) create() {
	for v := 1; v <= 13; v++ {
		for s := 0; s <= 3; s++ {
			card := Card{value: v, suit: s}
			d.cards = append(d.cards, card)
		}
	}
}

func (d *Deck) shuffle() {
	rand.Shuffle(len(d.cards), func(i, j int) { d.cards[i], d.cards[j] = d.cards[j], d.cards[i] })
}

type Game struct {
	deck        Deck
	playerCards []Card
	dealerCards []Card
	playerSum   int
	dealerSum   int
	status      string
}

func (game *Game) dealStartingCards() {

	game.playerCards = append(game.playerCards, game.deck.draw(2)...)
	game.dealerCards = append(game.dealerCards, game.deck.draw(2)...)

	game.showCards(true, false) // shows my cards

	game.updateStatus() // update the sums of players cards, if player's sum is 21, return "W" and later end the game

	fmt.Printf("Dealer's cards are: %v\n", game.dealerCards[0].getString()) // shows dealer's face up card
	fmt.Println()

}

func (game *Game) showCards(me bool, dealer bool) {
	if me == true {
		fmt.Printf("Your cards are: ")
		for _, card := range game.playerCards {
			cardString := card.getString()
			fmt.Printf("%v ", cardString)
		}
		fmt.Printf("\n")
	}
	if dealer == true {
		fmt.Printf("Dealer's cards are: ")
		for _, card := range game.dealerCards {
			cardString := card.getString()
			fmt.Printf("%v ", cardString)
		}
		fmt.Printf("\n")
	}
}

func (game *Game) isAcePlayer() {
	if game.playerSum < 11 {
		game.playerSum += 11
	} else {
		game.playerSum += 1
	}
}

func (game *Game) isAceDealer() {
	if game.dealerSum < 11 {
		game.dealerSum += 11
	} else {
		game.dealerSum += 1
	}
}

func (game *Game) updatePlayerSum() {
	game.playerSum = 0
	for _, card := range game.playerCards {
		switch card.value {
		case 11, 12, 13:
			game.playerSum += 10
		case 1:
			defer game.isAcePlayer()
			continue
		default:
			game.playerSum += card.value
		}
	}
}

func (game *Game) updateDealerSum() {
	game.dealerSum = 0
	for _, card := range game.dealerCards {
		switch card.value {
		case 11, 12, 13:
			game.dealerSum += 10
		case 1:
			defer game.isAceDealer()
			continue
		default:
			game.dealerSum += card.value
		}
	}
}

func (game *Game) updateStatus() {
	game.updatePlayerSum()
	game.updateDealerSum()
	if game.playerSum == 21 {
		game.status = "w"
	}
	if game.playerSum > 21 {
		fmt.Println("BUST")
		game.status = "l"
	}
	if game.dealerSum > 21 {
		fmt.Println("DEALER BUST")
		game.status = "w"
	}
}

func (game *Game) play(bet float64) float64 {
	game.status = ""
	game.playerSum = 0
	game.dealerSum = 0
	fmt.Println()
	fmt.Println("----------------")
	fmt.Println()

	game.deck = Deck{}          // create game deck
	game.playerCards = []Card{} // create a slice of player's cards
	game.dealerCards = []Card{} // create a slice of dealer's cards

	game.deck.create()  // create 52 cards in the deck
	game.deck.shuffle() // shuffle cards in deck

	game.dealStartingCards() // deal starting cards
	if game.status == "w" {
		fmt.Println("You won!")
		fmt.Println()
		return bet
	}
	if game.status == "l" {
		fmt.Println("You lost!")
		fmt.Println()
		return -bet
	}

	game.playerTurn()
	if game.status == "w" {
		fmt.Println("You won!")
		fmt.Println()
		return bet
	}
	if game.status == "l" {
		fmt.Println("You lost!")
		fmt.Println()
		return -bet
	}

	game.dealerTurn()
	if game.status == "w" {
		fmt.Println("You won!")
		fmt.Println()
		return bet
	}
	if game.status == "l" {
		fmt.Println("You lost!")
		fmt.Println()
		return -bet
	}

	game.compare()
	if game.status == "w" {
		fmt.Println("You won!")
		fmt.Println()
		return bet
	}
	if game.status == "l" {
		fmt.Println("You lost!")
		fmt.Println()
		return -bet
	}

	fmt.Println("Tie!")
	return 0
}

func (game *Game) compare() {
	fmt.Println()
	fmt.Println("----------------")
	fmt.Println()
	fmt.Println("Comparing cards.")
	game.showCards(true, true)
	if game.playerSum > game.dealerSum {
		game.status = "w"
	} else if game.playerSum <= game.dealerSum {
		game.status = "l"
	}
}

func (game *Game) playerTurn() {
	fmt.Println("----------------")
	fmt.Println()
	fmt.Println("Your turn, would you like to Hit or Stand? (H/S) ")
	i := true
	for i == true {
		response := enterString()
		switch response {
		case "H", "Hit", "h", "hit":
			i = game.hit()
			if i == false {
				return
			}
			fmt.Println("Your turn, would you like to Hit or Stand? (H/S) ")
		case "S", "Stand", "s", "stand":
			return
		default:
			fmt.Println("Enter one of these options: (H/S)")
		}
	}
}

func (game *Game) hit() bool {
	game.playerCards = append(game.playerCards, game.deck.draw(1)...)
	game.showCards(true, false)

	game.updateStatus()
	if game.status == "l" {
		return false
	}

	return true
}

func (game *Game) dealerHit() bool {
	game.dealerCards = append(game.dealerCards, game.deck.draw(1)...)
	game.showCards(false, true)

	game.updateStatus()
	if game.status == "w" {
		return false
	}
	return true
}

func (game *Game) dealerTurn() {
	fmt.Println()
	fmt.Println("----------------")
	fmt.Println()
	fmt.Println("Dealer's turn.")
	game.showCards(false, true)

	for true {
		if game.dealerSum < 17 {
			fmt.Println("Dealer hits")
			i := game.dealerHit()
			if i == false {
				return
			}
		} else {
			return
		}
	}
}

func enterString() string {
	reader := bufio.NewReader(os.Stdin)
	// ReadString will block until the delimiter is entered
	input, err := reader.ReadString('\r')
	if err != nil {
		fmt.Println("An error occurred while reading input. Please try again", err)
		return ""
	}

	// remove the delimiter from the string
	input = strings.TrimSuffix(input, "\r")
	return input
}

func main() {
	balance := float64(100)

	for balance > 0 {
		fmt.Printf("Your balance is: $%.2f\n", balance)
		fmt.Printf("Enter your bet (q to quit): ")
		bet, err := strconv.ParseFloat(enterString(), 64)
		if err != nil {
			break
		}
		if bet > balance || bet <= 0 {
			fmt.Println("Invalid bet.")

			continue
		}

		game := Game{}
		balance += game.play(bet)
	}

	fmt.Printf("You left with: $%.2f\n", balance)
}
