
public class Solution {

    private class Word {
        int vowelCount;
        int indexPastEndOfWord;
    }

    private final Word word = new Word();

    public String reverseWords(String s) {
        char[] input = s.toCharArray();
        countVowels(0, input);

        int index = word.indexPastEndOfWord + 1;
        int targetNumberOfVowels = word.vowelCount;

        while (index < input.length) {
            countVowels(index, input);
            if (word.vowelCount == targetNumberOfVowels) {
                reverse(index, word.indexPastEndOfWord - 1, input);
            }
            index = word.indexPastEndOfWord + 1;
        }
        return String.valueOf(input);
    }

    private void countVowels(int index, char[] input) {
        int numberOfVowels = 0;
        while (index < input.length && input[index] != ' ') {
            if (isVowel(input[index])) {
                ++numberOfVowels;
            }
            ++index;
        }
        word.vowelCount = numberOfVowels;
        word.indexPastEndOfWord = index;
    }

    private void reverse(int left, int right, char[] input) {
        while (left < right) {
            char temp = input[left];
            input[left] = input[right];
            input[right] = temp;
            ++left;
            --right;
        }
    }

    private boolean isVowel(char letter) {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
}
