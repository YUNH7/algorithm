function solution(cards1, cards2, goal) {
    let firstIdx = 0, secondIdx = 0;
    for (let word of goal) {
        if (word === cards1[firstIdx]) firstIdx++;
        else if (word === cards2[secondIdx]) secondIdx++;
        else return 'No';
    }
    return 'Yes';
}