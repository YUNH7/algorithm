function solution(lottos, win_nums) {
    let zero = 0
    let win_num = 0
    for (let lotto of lottos) {
        if (lotto === 0) zero++
        else if (win_nums.includes(lotto)) win_num++
    }
    return [7-(win_num+zero || 1), 7-(win_num || 1)]
}