
using System;

public class Solution
{
    private class Word
    {
        public int vowelCount;
        public int indexPastEndOfWord;
    }

    private readonly Word word = new Word();

    public string ReverseWords(string s)
    {
        char[] input = s.ToCharArray();
        CountVowels(0, input);

        int index = word.indexPastEndOfWord + 1;
        int targetNumberOfVowels = word.vowelCount;

        while (index < input.Length)
        {
            CountVowels(index, input);
            if (word.vowelCount == targetNumberOfVowels)
            {
                Reverse(index, word.indexPastEndOfWord - 1, input);
            }
            index = word.indexPastEndOfWord + 1;
        }
        return new string(input);
    }

    private void CountVowels(int index, char[] input)
    {
        int numberOfVowels = 0;
        while (index < input.Length && input[index] != ' ')
        {
            if (IsVowel(input[index]))
            {
                ++numberOfVowels;
            }
            ++index;
        }
        word.vowelCount = numberOfVowels;
        word.indexPastEndOfWord = index;
    }

    private void Reverse(int left, int right, char[] input)
    {
        while (left < right)
        {
            char temp = input[left];
            input[left] = input[right];
            input[right] = temp;
            ++left;
            --right;
        }
    }

    private bool IsVowel(char letter)
    {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
}
