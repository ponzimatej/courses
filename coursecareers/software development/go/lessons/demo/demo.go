package main

func main() {

	// uint = 1 | default 0
	// int = -1 | default 0
	// float32 = 1.234 | default 0
	// float64 = 1.2345678 | default 0
	// byte = 'c'
	// rune
	// bool = true | default false
	// string = "hello" | default ""
	// nil = null / undefined

	// &T = type of
	// %v = value of
	// %e = 7.72315124 => 7.723151e+00
	// %f = float
	// %s = string
	// %d = int
	// %.2f = print up to two decimal places

	// fmt.Println - prints line
	// fmt.Printf - prints format - % in comment above
	// fmt.Sprintf - creates a new string with the value inside

	// NO '**' => math.Pow(5, 3) = 5^3

	// x, err = strconv.Atoi("1234") - converts a string to an int and an optional error
	// x, err = strconv.ParseInt("1234", 10 <base>, 8 <converts to int8> 0 <dont worry about bit size, just convert to int64>)
	// x, err = strconv.ParseInt("1234", 10, 0) returns x = 1234

	// if x < 2 {} else if x > 5 {} else {}

	// switch x {
	//	case 1:
	// 		fmt.Println("one")
	//	case "a", "b", "c":
	//		fmt.Println("a is 'a' 'b' or 'c'")
	//	default:
	//		fmt.Println("default")
	// }

	// switch {
	// case a "":
	// 	fmt.Println("a isone")
	// case b < 2:
	// 	fmt.Println("b is two")
	// default:
	// 	fmt.Println("default")
	// }

	// using fallthrough
	// switch {
	// case a < -1:
	// 	fmt.Println("a is less than -1")
	// 	fallthrough
	// case a < 0:
	// 	fmt.Println("a is lees than 0")
	// 	fallthrough
	// case a < 1:
	// 	fmt.Println("a is less than 1")
	// default:
	// 	fmt.Println("default")
	// }
}
