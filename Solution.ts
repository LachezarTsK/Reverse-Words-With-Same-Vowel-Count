
function reverseWords(s: string): string {
    const input = s.split('');
    countVowels(0, input);

    let index = word.indexPastEndOfWord + 1;
    const targetNumberOfVowels = word.vowelCount;

    while (index < input.length) {
        countVowels(index, input);
        if (word.vowelCount === targetNumberOfVowels) {
            reverse(index, word.indexPastEndOfWord - 1, input);
        }
        index = word.indexPastEndOfWord + 1;
    }
    return input.join('');
};

const word = {
    vowelCount: 0,
    indexPastEndOfWord: 0
};

function countVowels(index: number, input: string[]): void {
    let numberOfVowels = 0;
    while (index < input.length && input[index] !== ' ') {
        if (isVowel(input[index])) {
            ++numberOfVowels;
        }
        ++index;
    }
    word.vowelCount = numberOfVowels;
    word.indexPastEndOfWord = index;
}

function reverse(left: number, right: number, input: string[]): void {
    while (left < right) {
        [input[left], input[right]] = [input[right], input[left]];
        ++left;
        --right;
    }
}

function isVowel(letter: string): boolean {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}
