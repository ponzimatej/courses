package main

import (
	"fmt"
	"sync"
)

type Counter struct {
	value int
	lock  sync.Mutex
}

func count(counter *Counter, wg *sync.WaitGroup) {
	counter.lock.Lock()
	defer counter.lock.Unlock()
	counter.value++
	fmt.Println(counter.value)
	wg.Done()
}

func main() {
	counter := Counter{}

	wg := sync.WaitGroup{}

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go count(&counter, &wg)
	}

	wg.Wait()
}
