function solution(board, moves) {
    const stackArr = board.map((_, i, arr) => board.map((_, j) => arr[j][i]).reverse().filter(Boolean));
    return moves.reduce(({bucket, result}, move) => {
        const doll = stackArr[move - 1].pop();
        if (doll) {
            if (bucket.at(-1) === doll) {
                bucket.pop();
                result += 2;
            } else bucket.push(doll);
        }
        return {bucket, result};
    }, {bucket: [], result: 0}).result;
}