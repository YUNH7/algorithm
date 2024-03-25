function solution(str_list) {
    const idx = str_list.findIndex(c => c === 'l' || c === 'r')
    return idx === -1 
        ? [] 
        : str_list[idx] === 'l' 
        ? str_list.slice(0, idx) 
        : str_list.slice(idx+1)
}