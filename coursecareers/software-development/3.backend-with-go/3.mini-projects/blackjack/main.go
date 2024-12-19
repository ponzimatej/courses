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

	if len(deck.cards) == 0 {
		fmt.Printf("Current deck is empty, creating a new deck\n")
		deck.create()
		deck.shuffle()
	}

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
	bet         float64
}

func (game *Game) play(bet float64) float64 {
	game.status = ""
	game.playerSum = 0
	game.dealerSum = 0
	game.playerCards = []Card{}
	game.dealerCards = []Card{}
	game.bet = bet
	fmt.Printf("\n----------------\n\n")

	game.dealStartingCards()        // deal starting cards
	game.updateSumsAndCheckStatus() // update the sums of players cards and check if game is over
	if game.checkIfGameOver(game.bet) != 1 {
		return game.checkIfGameOver(game.bet)
	}

	game.playerTurn()
	if game.checkIfGameOver(game.bet) != 1 {
		return game.checkIfGameOver(game.bet)
	}

	game.dealerTurn()
	if game.checkIfGameOver(game.bet) != 1 {
		return game.checkIfGameOver(game.bet)
	}

	game.compare()
	if game.checkIfGameOver(game.bet) != 1 {
		return game.checkIfGameOver(game.bet)
	}

	fmt.Println("Tie!")
	fmt.Println()
	return 0
}

func (game *Game) dealStartingCards() {

	game.playerCards = append(game.playerCards, game.deck.draw(2)...)
	game.dealerCards = append(game.dealerCards, game.deck.draw(2)...)

	game.showCards(true, false)                                               // shows my cards
	fmt.Printf("Dealer's cards are: %v\n\n", game.dealerCards[0].getString()) // shows dealer's face up card

}

func (game *Game) showCards(player bool, dealer bool) {
	if player {
		fmt.Printf("Your cards are: ")
		for _, card := range game.playerCards {
			cardString := card.getString()
			fmt.Printf("%v ", cardString)
		}
		fmt.Printf("\n")
	}

	if dealer {
		fmt.Printf("Dealer's cards are: ")
		for _, card := range game.dealerCards {
			cardString := card.getString()
			fmt.Printf("%v ", cardString)
		}
		fmt.Printf("\n")
	}
}

func (game *Game) updateSumsAndCheckStatus() {
	game.updatePlayerSum()
	game.updateDealerSum()
	game.checkStatus()
}

func (game *Game) updatePlayerSum() {
	game.playerSum = 0

	for _, card := range game.playerCards {
		switch card.value {
		case 11, 12, 13:
			game.playerSum += 10
		case 1:
			defer game.AddAceToPlayerSum()
			continue
		default:
			game.playerSum += card.value
		}
	}

}

func (game *Game) AddAceToPlayerSum() {
	if game.playerSum < 11 {
		game.playerSum += 11
	} else {
		game.playerSum += 1
	}
}

func (game *Game) updateDealerSum() {
	game.dealerSum = 0

	for _, card := range game.dealerCards {
		switch card.value {
		case 11, 12, 13:
			game.dealerSum += 10
		case 1:
			defer game.AddAceToDealerSum()
			continue
		default:
			game.dealerSum += card.value
		}
	}

}

func (game *Game) AddAceToDealerSum() {
	if game.dealerSum < 11 {
		game.dealerSum += 11
	} else {
		game.dealerSum += 1
	}
}

func (game *Game) checkStatus() { 
	if game.playerSum > 21 {
		game.status = "l"
		fmt.Println("Bust! You lost.")
		game.showCards(false, true)
		fmt.Println()
	}
	if game.dealerSum > 21 {
		game.status = "w"
		fmt.Println("Dealer bust! You won.")
		fmt.Println()
	}
}

func (game *Game) checkIfGameOver(bet float64) float64 {
	if game.status == "w" {
		return bet
	}

	if game.status == "l" {
		return -bet
	}

	if game.status == "t" {
		return 0
	}

	return 1
}

func (game *Game) playerTurn() {
	i := true
	for i == true {
		fmt.Printf("Your turn, would you like to Hit or Stand or Double Down? (H/S/D) ")
		response := strings.ToLower(enterString())
		switch response {
		case "h", "hit":
			game.hitPlayer()
			if game.status == "l" || game.status == "w" {
				return
			}
		case "s", "stand":
			return
		case "d", "double down":
			game.doubleDown()
			game.hitPlayer()
			if game.status == "l" || game.status == "w" {
				return
			}
			return
		default:
			fmt.Println("Enter one of these options: (H/S)")
		}
	}
}

func (game *Game) doubleDown() {
	game.bet = game.bet * 2
}

func (game *Game) hitPlayer() {

	game.playerCards = append(game.playerCards, game.deck.draw(1)...)
	game.showCards(true, false)
	game.updateSumsAndCheckStatus()

}

func (game *Game) hitDealer() {

	game.dealerCards = append(game.dealerCards, game.deck.draw(1)...)
	game.showCards(false, true)
	game.updateSumsAndCheckStatus()
}

func (game *Game) dealerTurn() {
	fmt.Printf("\n----------------\n\nDealer's turn.\n")
	game.showCards(false, true)

	for game.dealerSum < 17 {
		fmt.Println("Dealer hits")
		game.hitDealer()
	}
}

func (game *Game) compare() {
	fmt.Printf("\n----------------\n\nComparing cards.\n")
	game.showCards(true, true)
	if game.playerSum > game.dealerSum {
		game.status = "w"
		fmt.Println("You are closer to 21. You won!")
	} else if game.playerSum < game.dealerSum {
		game.status = "l"
		fmt.Println("Dealer is closer to 21. You lost!")
	}
}

func enterString() string {
	reader := bufio.NewReader(os.Stdin)
	// ReadString will block until the delimiter is entered
	input, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("An error occurred while reading input. Please try again", err)
		return ""
	}

	// remove the delimiter from the string
	input = strings.TrimSuffix(input, "\n")
	return input
}

func main() {
	balance := float64(100)

	game := Game{}
	game.deck = Deck{}
	game.deck.create()  // create 52 cards in the deck
	game.deck.shuffle() // shuffle cards in deck

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
		balance += game.play(bet)
	}

	fmt.Printf("You left with: $%.2f\n", balance)
}
