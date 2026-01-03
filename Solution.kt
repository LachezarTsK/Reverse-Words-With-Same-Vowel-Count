
class Solution {

    private class Word {
        var vowelCount = 0
        var indexPastEndOfWord = 0
    }

    private val word = Word()

    fun reverseWords(s: String): String {
        val input = s.toCharArray()
        countVowels(0, input)

        var index = word.indexPastEndOfWord + 1
        val targetNumberOfVowels = word.vowelCount

        while (index < input.size) {
            countVowels(index, input)
            if (word.vowelCount == targetNumberOfVowels) {
                reverse(index, word.indexPastEndOfWord - 1, input)
            }
            index = word.indexPastEndOfWord + 1
        }
        return String(input)
    }

    private fun countVowels(index: Int, input: CharArray) {
        var index = index
        var numberOfVowels = 0
        while (index < input.size && input[index] != ' ') {
            if (isVowel(input[index])) {
                ++numberOfVowels
            }
            ++index
        }
        word.vowelCount = numberOfVowels
        word.indexPastEndOfWord = index
    }

    private fun reverse(left: Int, right: Int, input: CharArray) {
        var left = left
        var right = right
        while (left < right) {
            input[left] = input[right].also { input[right] = input[left] }
            ++left
            --right
        }
    }

    private fun isVowel(letter: Char): Boolean {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'
    }
}
