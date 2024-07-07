function solution(code) {
    return [...code].reduce(({mode, ret}, c, i) => 
        c === '1' 
            ? { mode: !mode, ret } 
            : mode && i % 2 || !(mode || i % 2) 
                ? { mode, ret: ret + c } 
                : { mode, ret }
    , { mode: false, ret: '' }).ret || 'EMPTY';
}