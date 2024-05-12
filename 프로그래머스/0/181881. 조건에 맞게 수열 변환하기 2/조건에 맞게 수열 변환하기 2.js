function solution(arr) {
    const aux = (array) => array.map(el => el >= 50 && !(el % 2) ? el / 2 : el < 50 && el % 2 ? el * 2 + 1 : el);
    
    let prev = arr;
    let x = 0;    
    while (true) {
        const next = aux(prev);
        if (prev.every((el, i) => el === next[i])) return x;
        else prev = next;
        x++;
    }
}