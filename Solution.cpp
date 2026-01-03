
#include <string>
#include <string_view>
using namespace std;

class Solution {

    struct Word {
        int vowelCount = 0;
        int indexPastEndOfWord = 0;
    };

    Word word;

public:
    string reverseWords(string& input) {
        countVowels(0, input);
        int index = word.indexPastEndOfWord + 1;
        int targetNumberOfVowels = word.vowelCount;

        while (index < input.length()) {
            countVowels(index, input);
            if (word.vowelCount == targetNumberOfVowels) {
                reverse(index, word.indexPastEndOfWord - 1, input);
            }
            index = word.indexPastEndOfWord + 1;
        }
        return input;
    }

private:
    void countVowels(int index, string_view input) {
        int numberOfVowels = 0;
        while (index < input.length() && input[index] != ' ') {
            if (isVowel(input[index])) {
                ++numberOfVowels;
            }
            ++index;
        }
        word.vowelCount = numberOfVowels;
        word.indexPastEndOfWord = index;
    }

    void reverse(int left, int right, string& input) const {
        while (left < right) {
            swap(input[left], input[right]);
            ++left;
            --right;
        }
    }

    bool isVowel(char letter) const {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
};
