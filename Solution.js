
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
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

/**
 * @param {number} index
 * @param {string[]} input
 * @return {void}
 */
function countVowels(index, input) {
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

/**
 * @param {number} left
 * @param {number} right
 * @param {string[]} input
 * @return {void}
 */
function reverse(left, right, input) {
    while (left < right) {
        [input[left], input[right]] = [input[right], input[left]];
        ++left;
        --right;
    }
}

/**
 * @param {string} letter
 * @return {boolean}
 */
function isVowel(letter) {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}
