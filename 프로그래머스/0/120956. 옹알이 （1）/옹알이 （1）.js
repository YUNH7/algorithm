function solution(babbling) {
    return babbling.reduce((a, c) => {
        const babble = ["aya", "ye", "woo", "ma"];
        let word = c;
        while (word !== '') {
            const idx = babble.findIndex(el => word.indexOf(el) === 0);
            if (idx === -1) break;            
            word = word.replace(...babble.splice(idx, 1), '');
        }
        
        return word ? a : a+1;
    }, 0);
}