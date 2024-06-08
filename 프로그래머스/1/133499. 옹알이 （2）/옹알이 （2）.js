function solution(babbling) {
    const aux = (str, prevStr) => {
        if (str.length === 0) return 1;
        
        const newPrevStr = ["aya", "ye", "woo", "ma"].find(b => str.indexOf(b) === 0);
        if (!newPrevStr || prevStr === newPrevStr) return 0;
        
        return aux(str.slice(newPrevStr.length), newPrevStr);
    }
    
    return babbling.map(b => aux(b)).reduce((a,c) => a+c, 0);
}