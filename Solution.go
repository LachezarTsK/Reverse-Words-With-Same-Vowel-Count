
package main

type Word struct {
    vowelCount         int
    indexPastEndOfWord int
}

var word = &Word{}

func reverseWords(s string) string {
    input := []byte(s)
    countVowels(0, input)

    index := word.indexPastEndOfWord + 1
    targetNumberOfVowels := word.vowelCount

    for index < len(input) {
        countVowels(index, input)
        if word.vowelCount == targetNumberOfVowels {
            reverse(index, word.indexPastEndOfWord - 1, input)
        }
        index = word.indexPastEndOfWord + 1
    }
    return string(input)
}

func countVowels(index int, input []byte) {
    numberOfVowels := 0
    for index < len(input) && input[index] != ' ' {
        if isVowel(input[index]) {
            numberOfVowels++
        }
        index++
    }
    word.vowelCount = numberOfVowels
    word.indexPastEndOfWord = index
}

func reverse(left int, right int, input []byte) {
    for left < right {
        input[left], input[right] = input[right], input[left]
        left++
        right--
    }
}

func isVowel(letter byte) bool {
    return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'
}
