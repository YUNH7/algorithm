function solution(n, words) {
    const uniqueWord = new Set(words);
    uniqueWord.delete(words[0]);
    for (let i = 1; i < words.length; i++) {
        const prev = words[i-1];
        const word = words[i];
        if (uniqueWord.has(word) && prev[prev.length-1] === word[0]) uniqueWord.delete(word);
        else return [(i+1) % n || n, Math.ceil((i+1) / n)];
    }
    return [0, 0];
}